
const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

export const dateParser = (inputDate: string) => {

    const dateObj = new Date(inputDate);

    const year = dateObj.getFullYear();
    const month = months[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, "0");

    return `${year} ${month} ${day}`;

}