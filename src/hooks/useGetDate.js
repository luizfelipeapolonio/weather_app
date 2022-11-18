// Hooks
import { useState, useEffect } from "react";

export const useGetDate = (weatherInfo) => {
    const [weekDay, setWeekDay] = useState(null);
    const [month, setMonth] = useState(null);
    const [time, setTime] = useState(null);

    useEffect(() => {
        const date = new Date();

        if(!weatherInfo) {
            return;
        }

        // Get the week day
        const getWeekDay = () => {
            const weekDay = [
                "Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira",
                "Quinta-Feira", "Sexta-Feira", "Sábado"
            ];

            const day = date.getDay();
            const currentWeekDay = weekDay[day];

            setWeekDay(currentWeekDay);
        }

        // Get the month and the month day
        const getMonth = () => {
            const allMonths = [
                "Janeiro", "Fevereiro", "Março",
                "Abril", "Maio", "Junho",
                "Julho", "Agosto", "Setembro",
                "Outubro", "Novembro", "Dezembro"
            ];

            const month = date.getMonth();
            const currentMonth = allMonths[month];
            const monthDay = date.getDate();
            const monthDate = `${monthDay} de ${currentMonth}`;

            setMonth(monthDate);
        }

        const getTime = () => {
            const hour = date.getHours();
            const minutes = date.getMinutes();
            let formatedMinute;

            if(minutes < 10) {
                formatedMinute = `0${minutes}`;
            } else {
                formatedMinute = minutes;
            }

            const time = `${hour}:${formatedMinute}`;

            setTime(time);
        }

        getWeekDay();
        getMonth();
        getTime();
    }, [weatherInfo]);

    return { weekDay, month, time };
}