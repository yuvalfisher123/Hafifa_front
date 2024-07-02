import axiosInstance from "./axiosInstance";

export default {
    getEventsInDates : async (start : number, end : number) => {
        return (await axiosInstance.get(`${start}/${end}`)).data;
    }
}