export const required = value => value ? undefined : "Required";

export const email = email => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()) ? "" : "Email is not valid";
};

export const password = password => {
    return password.length>20 ? "Password must be shorter" :
        password.length<6 ? "Password must be longer" : "";
};