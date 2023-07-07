function formatDate(
  inputDate,
  options = {
    weekDay: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
) {
  const date = new Date(inputDate);
  return Intl.DateTimeFormat("id", options).format(date);
}

export { formatDate };
