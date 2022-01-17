import React from 'react';

export const Reports = ({ className = "h20 w16", fill="currentColor", stroke="currentColor", strokeWidth= 0} ) => {
    return <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 20" className={className} fill={fill} stroke={stroke}>
        <path strokeWidth={strokeWidth} d="M14 0H2.00003C0.90003 0 3.05176e-05 0.9 3.05176e-05 2V18C3.05176e-05 19.1 0.90003 20 2.00003 20H14C15.1 20 16 19.1 16 18V2C16 0.9 15.1 0 14 0ZM2.00003 2H7.00003V10L4.50003 8.5L2.00003 10V2Z"/>
    </svg>
}

export const Feed = ({ className = "h17 w22", fill="currentColor", stroke="currentColor", strokeWidth= 0}) => {
    return <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 23 18" className={className} fill={fill} stroke={stroke}>
        <path strokeWidth={strokeWidth} d="M12.6667 8.5H19.6667V10H12.6667V8.5ZM12.6667 6H19.6667V7.5H12.6667V6ZM12.6667 11H19.6667V12.5H12.6667V11ZM20.6667 0.5H2.66669C1.56669 0.5 0.666687 1.4 0.666687 2.5V15.5C0.666687 16.6 1.56669 17.5 2.66669 17.5H20.6667C21.7667 17.5 22.6667 16.6 22.6667 15.5V2.5C22.6667 1.4 21.7667 0.5 20.6667 0.5ZM20.6667 15.5H11.6667V2.5H20.6667V15.5Z"/>
    </svg>

}

export const Board = ({ className = "h6 w6", fill="currentColor", stroke="currentColor", strokeWidth= 0}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" className={className} fill={fill} stroke={stroke}>
        <path strokeWidth={strokeWidth} d="M0.333344 10.5H8.33334V0.5H0.333344V10.5ZM0.333344 18.5H8.33334V12.5H0.333344V18.5ZM10.3333 18.5H18.3333V8.5H10.3333V18.5ZM10.3333 0.5V6.5H18.3333V0.5H10.3333Z"/>
    </svg>
}

export const Backlog = ({ className = "h6 w6", fill="currentColor", stroke="currentColor", strokeWidth= 0}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" className={className} fill={fill} stroke={stroke}>
        <path strokeWidth={strokeWidth} d="M16 0.5H1.99C0.88 0.5 0.00999999 1.39 0.00999999 2.5L0 16.5C0 17.6 0.88 18.5 1.99 18.5H16C17.1 18.5 18 17.6 18 16.5V2.5C18 1.39 17.1 0.5 16 0.5ZM16 12.5H12C12 14.16 10.65 15.5 9 15.5C7.35 15.5 6 14.16 6 12.5H1.99V2.5H16V12.5Z"/>
    </svg>
}

export const Search = ({ className = "h6 w6", fill="currentColor", stroke="currentColor", strokeWidth= 0}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className={className} fill={fill} stroke={stroke}>
        <path strokeWidth={strokeWidth} d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"/>
    </svg>
}

export const Clock = ({ className = "h6 w6", fill="currentColor", stroke="currentColor", strokeWidth= 0}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" className={className} fill={fill} stroke={stroke}>
        <path strokeWidth={strokeWidth} d="M10 0.5C4.5 0.5 0 5 0 10.5C0 16 4.5 20.5 10 20.5C15.5 20.5 20 16 20 10.5C20 5 15.5 0.5 10 0.5ZM14.2 14.7L9 11.5V5.5H10.5V10.7L15 13.4L14.2 14.7Z"/>
    </svg>
}

export const Calendar = ({ className = "h6 w6", fill="currentColor", stroke="currentColor", strokeWidth= 2 , strokeLinecap = "round", strokeLinejoin = "round"}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none">
        <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#151515" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
        <path d="M16 2V6" stroke="#151515" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
        <path d="M8 2V6" stroke="#151515" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
        <path d="M3 10H21" stroke="#151515" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
    </svg>
}

export const Upload = ({ className = "h6 w6", fill="currentColor", stroke="currentColor", strokeWidth= 2 , strokeLinecap = "round", strokeLinejoin = "round"}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none">
        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="black"  strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
        <path d="M17 8L12 3L7 8" stroke="black"  strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
        <path d="M12 3V15" stroke="black"  strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
    </svg>
}