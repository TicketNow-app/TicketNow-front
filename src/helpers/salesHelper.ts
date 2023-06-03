// [
//   {
//     "id": 1,
//     "code": "45103569856447852010",
//     "holders": "Isabella Santos",
//     "purchased": "2023-05-10T00:03:17.349Z",
//     "used": "2023-05-31T00:03:17.349Z",
//     "id_ticket": {
//       "id": 7,
//       "price": "300.00",
//       "amount": 100,
//       "accept_coupon": "Y"
//     },
//     "id_coupon": {
//       "id": 22,
//       "discount": "10.00",
//       "acumulative": "N"
//     }
//   },
//   {
//     "id": 2,
//     "code": "45103569856447852011",
//     "holders": "Lucas Santos",
//     "purchased": "2023-05-10T00:03:17.349Z",
//     "used": "2023-05-31T00:04:21.349Z",
//     "id_ticket": {
//       "id": 7,
//       "price": "300.00",
//       "amount": 100,
//       "accept_coupon": "Y"
//     },
//     "id_coupon": {
//       "id": 22,
//       "discount": "10.00",
//       "acumulative": "N"
//     }
//   }
// ]

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
  sales.forEach((sale) => {
    profit += parseFloat(sale.id_ticket.price) * parseFloat(sale.id_coupon.discount) / 100;
  });
  return profit;
};
