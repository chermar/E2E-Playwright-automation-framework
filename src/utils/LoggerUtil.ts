import winston from "winston";
import path from "path";
import moment from "moment-timezone";

const currentDir= __dirname;
// GO One Level above 
const srcDir = path.resolve(currentDir,"..");

// Change to ' logging folder'
const loggingDir = path.resolve(srcDir,"logging");

const customFormat = winston.format.printf(({level,message,timestamp})=>{

    return`${timestamp}[${level}]:${message}`;
});

// set the desried timezone 
//const timezone ='Europe/London'; for the uk
//const timezone ='America/New_York'; for the US
const timezone ='Asia/Kolkata'; //for India;

const logger  = winston.createLogger({
    format:winston.format.combine(
        winston.format.timestamp({format:()=>moment().tz(timezone).format()}),
        customFormat
    ),
    transports:[
        new winston.transports.Console({level:"debug"}),
        new winston.transports.File({
            filename:path.join(loggingDir,"test_run.log"),
            maxFiles:5, // Number of log files to retain
            maxsize:10*1024,  // 10 KB , specify the size bytes
            level:"info",
        }),
        new winston.transports.File({
            filename:path.join(loggingDir,"test_error.log"),
           maxFiles:5, // Number of log files to retain
            maxsize:10*1024,  // 10 KB , specify the size bytes
            level:"error",
        }),
    ],
});

export default logger;