interface Orders {
  id: number;
  code: string;
  holders: string;
  purchased: Date;
  used: Date;
  id_ticket: {
    id: number;
    price: string;
    amount: number;
    accept_coupon: string;
    id_event: {
      id: number;
      name: string;
      description: string;
      dateStart: Date;
      dateFinish: Date;
      hourStart: string;
      hourFinish: string;
      end: Date;
      id_place: {
        id: number;
        name: string;
        address: string;
        district: string;
        cep: number;
        longitude: string;
        latitude: string;
      };
      images: {
        id: number;
        url: string;
        description: string;
        type: string;
      }[];
    };
  };
}

interface PromoterSoldTickets extends Orders {
  id_coupon: {
    id: number;
    discount: number;
    acumulative: 'N' | 'Y';
  };
}

export const getFinishedOrders = (orders: Orders[]) => {
  const currentDate = new Date();

  return orders.filter(order => {
    const orderDateFinish = new Date(order.id_ticket.id_event.dateFinish);
    return orderDateFinish < currentDate;
  });
};

export const getOrders = (orders: Orders[]) => {
  const currentDate = new Date();

  return orders.filter(order => {
    const orderDateFinish = new Date(order.id_ticket.id_event.dateFinish);
    return orderDateFinish >= currentDate;
  });
};
export const sortPromoterSoldTicketsByEvent = (orders: PromoterSoldTickets[]) => {
  const eventsMap: { [eventId: number]: PromoterSoldTickets[] } = {};

  // Agrupar as vendas por evento
  orders.forEach(order => {
    const eventId = order.id_ticket.id_event.id;

    if (!eventsMap[eventId]) {
      eventsMap[eventId] = [];
    }

    eventsMap[eventId].push(order);
  });

  // Transformar o objeto em um array de eventos
  const events: Event[] = Object.keys(eventsMap).map(eventId => {
    const eventOrders = eventsMap[Number(eventId)];
    const firstOrder = eventOrders[0];
    const { id_event } = firstOrder.id_ticket;
    const { id, name, description, dateStart, dateFinish, hourStart, hourFinish, earned, images } =
      id_event;

    const orders = eventOrders.map(order => {
      const { id, price, amount, accept_coupon } = order.id_ticket;

      return {
        id,
        price,
        amount,
        accept_coupon,
      };
    });

    return {
      id_event: {
        id,
        name,
        description,
        dateStart,
        dateFinish,
        hourStart,
        hourFinish,
        earned,
        images,
      },
      id_coupon: {
        id: firstOrder.id_coupon.id,
        discount: firstOrder.id_coupon.discount,
        acumulative: firstOrder.id_coupon.acumulative,
      },
      orders,
    };
  });

  return events;
};
