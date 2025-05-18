import arcjet, {tokenBucket, shield, detectBot} from "@arcjet/node";

import "dotenv/config"

// initialize arcjet

export const aj = arcjet({
    key: process.env.ARCJET_KEY,
    characteristics: ["ip.src"],
    rules: [
        // shield protects the app from common attacks e.g. sql injection, xss, csrf attacks
        shield({mode: "LIVE"}),
        detectBot({
            mode:"LIVE",
            // block all bots except search engines
            allow: [
                "CATEGORY:SEARCH_ENGINE"
                //full list: https://arcjet.com/bot-list
            ]
        }),
        tokenBucket({
            mode:"LIVE",
            refillRate: 5,
            interval: 10,
            capacity: 10,
        })
    ]

})