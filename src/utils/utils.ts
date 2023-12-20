export function cpfMask(value: string): string {
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

export function cnpjMask(value: string): string {
  return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');
}

export function removeCpfCnpjFormatation(value: string): string {
  return value.toString()?.replace(/(\.|\/|-)/g, '');
}

export function formatCpfCnpj(value: string): string {
  value = removeCpfCnpjFormatation(value);
  if (value.length <= 11) {
    return cpfMask(value);
  } else if (value.length <= 14) {
    return cnpjMask(value);
  }
  return '';
}

export function formatMoney(value: number): string {
  const format = {
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
  };
  return value.toLocaleString('pt-BR', format);
}

export function formatToDate(timestamp: string): string {
  const date = timestamp.split('T')[0];
  return date.split('-').reverse().join('/');
}

export function formatToWriteDate(timestamp: string): string {
  const date = new Date(timestamp);

  const weekday = date
    .toLocaleDateString('pt-BR', {
      weekday: 'short',
    })
    .split('.')[0];

  const weekdayUpperCase = weekday.charAt(0).toUpperCase() + weekday.slice(1);

  const day = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
  });

  const month = date.toLocaleDateString('pt-BR', {
    month: 'short',
  });

  const monthUpperCase = month.charAt(0).toUpperCase() + month.slice(1).split('.')[0];

  return `${weekdayUpperCase} ${day} de ${monthUpperCase}`;
}

export function formatHour(timestamp: string): string {
  const date = new Date(timestamp);
  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });
}
