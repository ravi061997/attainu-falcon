const secondsToTime = (seconds, locale) => {
    const date = new Date(0);
    date.setHours(0, 0, seconds, 0);
    return date.toLocaleTimeString(locale);
}
console.log(secondsToTime(3700, "en"));
