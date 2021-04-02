function truncateString(str, num) {
    //check
    if(num >= str.length) return str;
    if(num <= 3) return str.slice(0, num) + "...";
    return str.slice(0, num-3) + "...";
}
truncateString('A-tisket a-tasket A green and yellow basket', 11);
truncateString('Tommy goes to work', 3);