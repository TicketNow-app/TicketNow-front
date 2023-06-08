interface Sales {
  id: number;
  code: string;
  holders: string;
  purchased: string;
  used: string;
  id_ticket: {
    id: number;
    price: string;
    amount: number;
    accept_coupon: string;
  };
  id_coupon: {
    id: number;
    discount: string;
    acumulative: string;
  };
}

export const profit = (sales: Sales[]) => {
  let profit = 0;
  sales.forEach(sale => {
    profit += (parseFloat(sale.id_ticket.price) * parseFloat(sale.id_coupon.discount)) / 100;
  });
  return profit;
};
