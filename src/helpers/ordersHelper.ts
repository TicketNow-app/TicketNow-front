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
