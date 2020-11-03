const TelegramBot = require("node-telegram-bot-api")
const fs = require("fs")
const config = require("./config")
const kb = require("./keyboard-bottons")
const keyboards = require("./keyboards")
const bot = new TelegramBot(config.TOKEN, { polling: true })


bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const first_name = msg.chat.first_name;
    const last_name = msg.chat.last_name;
    bot.sendMessage(chatId, `Привет, ${last_name} ${first_name} !`).then(
        bot.sendMessage(chatId, `👇🏿 Йоу, выбери действие 👇🏿`, {
            reply_markup: {
                inline_keyboard: keyboard_home,
            },
        })
    );
})


bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const first_name = msg.chat.first_name;
    const last_name = msg.chat.last_name;

    if (msg.text) {
        const text = msg.text.toLowerCase();

        if (~text.indexOf("прив")) {
            bot.sendMessage(chatId, `Хай, ${first_name}!`, {
                reply_markup: {
                    inline_keyboard: keyboard_home,
                },
            });
        }
    }
    switch (msg.text) {
        case kb.classes.fifth_a:
            bot.sendMessage(chatId, `Йоу, выбери день недели:`, {
                reply_markup: {
                    inline_keyboard: day_of_the_week_for_5a
                }
            })
            break;
        case kb.classes.fifth_b:
            bot.sendMessage(chatId, `Йоу, выбери день недели:`, {
                reply_markup: {
                    inline_keyboard: day_of_the_week_for_5b
                }
            })
            break;
        case kb.classes.fifth_v:
            bot.sendMessage(chatId, `Йоу, выбери день недели:`, {
                reply_markup: {
                    inline_keyboard: day_of_the_week_for_5v
                }
            })
            break;
        case kb.classes.sixth_a:
            bot.sendMessage(chatId, `Йоу, выбери день недели:`, {
                reply_markup: {
                    inline_keyboard: day_of_the_week_for_6a
                }
            })
            break;
        case kb.classes.sixth_b:
            bot.sendMessage(chatId, `Йоу, выбери день недели:`, {
                reply_markup: {
                    inline_keyboard: day_of_the_week_for_6b
                }
            })
            break;
        case kb.classes.sixth_v:
            bot.sendMessage(chatId, `Йоу, выбери день недели:`, {
                reply_markup: {
                    inline_keyboard: day_of_the_week_for_6v
                }
            })
            break;
        case kb.classes.seventh_a:
            bot.sendMessage(chatId, `Йоу, выбери день недели:`, {
                reply_markup: {
                    inline_keyboard: day_of_the_week_for_7a
                }
            })
            break;
        case kb.classes.seventh_b:
            bot.sendMessage(chatId, `Йоу, выбери день недели:`, {
                reply_markup: {
                    inline_keyboard: day_of_the_week_for_7b
                }
            })
            break;
        case kb.classes.seventh_v:
            bot.sendMessage(chatId, `Йоу, выбери день недели:`, {
                reply_markup: {
                    inline_keyboard: day_of_the_week_for_7v
                }
            })
            break;
        case kb.classes.eighth_a:
            bot.sendMessage(chatId, `Йоу, выбери день недели:`, {
                reply_markup: {
                    inline_keyboard: day_of_the_week_for_8a
                }
            })
            break;
        case kb.classes.eighth_b:
            bot.sendMessage(chatId, `Йоу, выбери день недели:`, {
                reply_markup: {
                    inline_keyboard: day_of_the_week_for_8b
                }
            })
            break;
        case kb.classes.eighth_v:
            bot.sendMessage(chatId, `Йоу, выбери день недели:`, {
                reply_markup: {
                    inline_keyboard: day_of_the_week_for_8v
                }
            })
            break;
        case kb.classes.ninth_a:
            bot.sendMessage(chatId, `Йоу, выбери день недели:`, {
                reply_markup: {
                    inline_keyboard: day_of_the_week_for_9a
                }
            })
            break;
        case kb.classes.ninth_b:
            bot.sendMessage(chatId, `Йоу, выбери день недели:`, {
                reply_markup: {
                    inline_keyboard: day_of_the_week_for_9b
                }
            })
            break;
        case kb.classes.ninth_v:
            bot.sendMessage(chatId, `Йоу, выбери день недели:`, {
                reply_markup: {
                    inline_keyboard: day_of_the_week_for_9v
                }
            })
            break;
        case kb.classes.tenth_a:
            bot.sendMessage(chatId, `Йоу, выбери день недели:`, {
                reply_markup: {
                    inline_keyboard: day_of_the_week_for_10a
                }
            })
            break;
        case kb.classes.tenth_b:
            bot.sendMessage(chatId, `Йоу, выбери день недели:`, {
                reply_markup: {
                    inline_keyboard: day_of_the_week_for_10b
                }
            })
            break;
        case kb.classes.eleventh_a:
            bot.sendMessage(chatId, `Йоу, выбери день недели:`, {
                reply_markup: {
                    inline_keyboard: day_of_the_week_for_11a
                }
            })
            break;
        case kb.classes.eleventh_b:
            bot.sendMessage(chatId, `Йоу, выбери день недели:`, {
                reply_markup: {
                    inline_keyboard: day_of_the_week_for_11b
                }
            })
            break;
        case kb.back:
            bot.sendMessage(chatId, `Хай, ${last_name} ${first_name} !`).then(
                bot.sendMessage(chatId, `👇🏿 Выбери действие 👇🏿`, {
                    reply_markup: {
                        inline_keyboard: keyboard_home,
                    },
                })
            );
            break;
    }
});
// 🚺
// ♿
const keyboard_home = [
    [
        {
            text: "🛅 Перейти в школьный портал 🛅",
            url: "https://school.mosreg.ru",
        },
    ],
    [
        {
            text: "🗂 Чекнуть расписание 🗂",
            callback_data: "check_lessons",
        },
    ],
    [
        {
            text: "♻ Новости в 'Рифмах и Панчах' ♻",
            url: "https://t.me/rhymestg",
        },
    ],
    [
        {
            text: "🔞 Об авторе 🔞",
            callback_data: "about_author",
        },
    ],
];

const day_of_the_week_for_5a = [
    [
        {
            text: "Понедельник",
            callback_data: "monday_5a",
        },
    ],
    [
        {
            text: "Вторник",
            callback_data: "tuesday_5a",
        },
    ],
    [
        {
            text: "Среда",
            callback_data: "wednesday_5a",
        },
    ],
    [
        {
            text: "Четверг",
            callback_data: "thursday_5a",
        },
    ],
    [
        {
            text: "Пятница",
            callback_data: "friday_5a",
        },
    ],
];

const day_of_the_week_for_5b = [
    [
        {
            text: "Понедельник",
            callback_data: "monday_5b",
        },
    ],
    [
        {
            text: "Вторник",
            callback_data: "tuesday_5b",
        },
    ],
    [
        {
            text: "Среда",
            callback_data: "wednesday_5b",
        },
    ],
    [
        {
            text: "Четверг",
            callback_data: "thursday_5b",
        },
    ],
    [
        {
            text: "Пятница",
            callback_data: "friday_5b",
        },
    ],
];

const day_of_the_week_for_5v = [
    [
        {
            text: "Понедельник",
            callback_data: "monday_5v",
        },
    ],
    [
        {
            text: "Вторник",
            callback_data: "tuesday_5v",
        },
    ],
    [
        {
            text: "Среда",
            callback_data: "wednesday_5v",
        },
    ],
    [
        {
            text: "Четверг",
            callback_data: "thursday_5v",
        },
    ],
    [
        {
            text: "Пятница",
            callback_data: "friday_5v",
        },
    ],
];

const day_of_the_week_for_6a = [
    [
        {
            text: "Понедельник",
            callback_data: "monday_6a",
        },
    ],
    [
        {
            text: "Вторник",
            callback_data: "tuesday_6a",
        },
    ],
    [
        {
            text: "Среда",
            callback_data: "wednesday_6a",
        },
    ],
    [
        {
            text: "Четверг",
            callback_data: "thursday_6a",
        },
    ],
    [
        {
            text: "Пятница",
            callback_data: "friday_6a",
        },
    ],
];

const day_of_the_week_for_6b = [
    [
        {
            text: "Понедельник",
            callback_data: "monday_6b",
        },
    ],
    [
        {
            text: "Вторник",
            callback_data: "tuesday_6b",
        },
    ],
    [
        {
            text: "Среда",
            callback_data: "wednesday_6b",
        },
    ],
    [
        {
            text: "Четверг",
            callback_data: "thursday_6b",
        },
    ],
    [
        {
            text: "Пятница",
            callback_data: "friday_6b",
        },
    ],
];

const day_of_the_week_for_6v = [
    [
        {
            text: "Понедельник",
            callback_data: "monday_6v",
        },
    ],
    [
        {
            text: "Вторник",
            callback_data: "tuesday_6v",
        },
    ],
    [
        {
            text: "Среда",
            callback_data: "wednesday_6v",
        },
    ],
    [
        {
            text: "Четверг",
            callback_data: "thursday_6v",
        },
    ],
    [
        {
            text: "Пятница",
            callback_data: "friday_6v",
        },
    ],
];

const day_of_the_week_for_7a = [
    [
        {
            text: "Понедельник",
            callback_data: "monday_7a",
        },
    ],
    [
        {
            text: "Вторник",
            callback_data: "tuesday_7a",
        },
    ],
    [
        {
            text: "Среда",
            callback_data: "wednesday_7a",
        },
    ],
    [
        {
            text: "Четверг",
            callback_data: "thursday_7a",
        },
    ],
    [
        {
            text: "Пятница",
            callback_data: "friday_7a",
        },
    ],
];

const day_of_the_week_for_7b = [
    [
        {
            text: "Понедельник",
            callback_data: "monday_7b",
        },
    ],
    [
        {
            text: "Вторник",
            callback_data: "tuesday_7b",
        },
    ],
    [
        {
            text: "Среда",
            callback_data: "wednesday_7b",
        },
    ],
    [
        {
            text: "Четверг",
            callback_data: "thursday_7b",
        },
    ],
    [
        {
            text: "Пятница",
            callback_data: "friday_7b",
        },
    ],
];

const day_of_the_week_for_7v = [
    [
        {
            text: "Понедельник",
            callback_data: "monday_7v",
        },
    ],
    [
        {
            text: "Вторник",
            callback_data: "tuesday_7v",
        },
    ],
    [
        {
            text: "Среда",
            callback_data: "wednesday_7v",
        },
    ],
    [
        {
            text: "Четверг",
            callback_data: "thursday_7v",
        },
    ],
    [
        {
            text: "Пятница",
            callback_data: "friday_7v",
        },
    ],
];

const day_of_the_week_for_8a = [
    [
        {
            text: "Понедельник",
            callback_data: "monday_8a",
        },
    ],
    [
        {
            text: "Вторник",
            callback_data: "tuesday_8a",
        },
    ],
    [
        {
            text: "Среда",
            callback_data: "wednesday_8a",
        },
    ],
    [
        {
            text: "Четверг",
            callback_data: "thursday_8a",
        },
    ],
    [
        {
            text: "Пятница",
            callback_data: "friday_8a",
        },
    ],
];

const day_of_the_week_for_8b = [
    [
        {
            text: "Понедельник",
            callback_data: "monday_8b",
        },
    ],
    [
        {
            text: "Вторник",
            callback_data: "tuesday_8b",
        },
    ],
    [
        {
            text: "Среда",
            callback_data: "wednesday_8b",
        },
    ],
    [
        {
            text: "Четверг",
            callback_data: "thursday_8b",
        },
    ],
    [
        {
            text: "Пятница",
            callback_data: "friday_8b",
        },
    ],
];

const day_of_the_week_for_8v = [
    [
        {
            text: "Понедельник",
            callback_data: "monday_8v",
        },
    ],
    [
        {
            text: "Вторник",
            callback_data: "tuesday_8v",
        },
    ],
    [
        {
            text: "Среда",
            callback_data: "wednesday_8v",
        },
    ],
    [
        {
            text: "Четверг",
            callback_data: "thursday_8v",
        },
    ],
    [
        {
            text: "Пятница",
            callback_data: "friday_8v",
        },
    ],
];

const day_of_the_week_for_9a = [
    [
        {
            text: "Понедельник",
            callback_data: "monday_9a",
        },
    ],
    [
        {
            text: "Вторник",
            callback_data: "tuesday_9a",
        },
    ],
    [
        {
            text: "Среда",
            callback_data: "wednesday_9a",
        },
    ],
    [
        {
            text: "Четверг",
            callback_data: "thursday_9a",
        },
    ],
    [
        {
            text: "Пятница",
            callback_data: "friday_9a",
        },
    ],
];

const day_of_the_week_for_9b = [
    [
        {
            text: "Понедельник",
            callback_data: "monday_9b",
        },
    ],
    [
        {
            text: "Вторник",
            callback_data: "tuesday_9b",
        },
    ],
    [
        {
            text: "Среда",
            callback_data: "wednesday_9b",
        },
    ],
    [
        {
            text: "Четверг",
            callback_data: "thursday_9b",
        },
    ],
    [
        {
            text: "Пятница",
            callback_data: "friday_9b",
        },
    ],
];

const day_of_the_week_for_9v = [
    [
        {
            text: "Понедельник",
            callback_data: "monday_9v",
        },
    ],
    [
        {
            text: "Вторник",
            callback_data: "tuesday_9v",
        },
    ],
    [
        {
            text: "Среда",
            callback_data: "wednesday_9v",
        },
    ],
    [
        {
            text: "Четверг",
            callback_data: "thursday_9v",
        },
    ],
    [
        {
            text: "Пятница",
            callback_data: "friday_9v",
        },
    ],
];

const day_of_the_week_for_10a = [
    [
        {
            text: "Понедельник",
            callback_data: "monday_10a",
        },
    ],
    [
        {
            text: "Вторник",
            callback_data: "tuesday_10a",
        },
    ],
    [
        {
            text: "Среда",
            callback_data: "wednesday_10a",
        },
    ],
    [
        {
            text: "Четверг",
            callback_data: "thursday_10a",
        },
    ],
    [
        {
            text: "Пятница",
            callback_data: "friday_10a",
        },
    ],
];

const day_of_the_week_for_10b = [
    [
        {
            text: "Понедельник",
            callback_data: "monday_10b",
        },
    ],
    [
        {
            text: "Вторник",
            callback_data: "tuesday_10b",
        },
    ],
    [
        {
            text: "Среда",
            callback_data: "wednesday_10b",
        },
    ],
    [
        {
            text: "Четверг",
            callback_data: "thursday_10b",
        },
    ],
    [
        {
            text: "Пятница",
            callback_data: "friday_10b",
        },
    ],
];

const day_of_the_week_for_11a = [
    [
        {
            text: "Понедельник",
            callback_data: "monday_11a",
        },
    ],
    [
        {
            text: "Вторник",
            callback_data: "tuesday_11a",
        },
    ],
    [
        {
            text: "Среда",
            callback_data: "wednesday_11a",
        },
    ],
    [
        {
            text: "Четверг",
            callback_data: "thursday_11a",
        },
    ],
    [
        {
            text: "Пятница",
            callback_data: "friday_11a",
        },
    ],
];

const day_of_the_week_for_11b = [
    [
        {
            text: "Понедельник",
            callback_data: "monday_11b",
        },
    ],
    [
        {
            text: "Вторник",
            callback_data: "tuesday_11b",
        },
    ],
    [
        {
            text: "Среда",
            callback_data: "wednesday_11b",
        },
    ],
    [
        {
            text: "Четверг",
            callback_data: "thursday_11b",
        },
    ],
    [
        {
            text: "Пятница",
            callback_data: "friday_11b",
        },
    ],
];

const author = [
    [
        {
            text: "Вконтакте",
            url: "https://vk.com/cpt_nemmo",
        },
        {
            text: "Instagram",
            url: "https://www.instagram.com/fedoseev_iakov/?hl=ru",
        },
    ],
];

bot.on("callback_query", (query) => {
    const chatId = query.message.chat.id;

    if (query.data === "check_lessons") {
        bot.sendMessage(chatId, `👇🏿 Выберите класс 👇🏿`, {
            reply_markup: {
                keyboard: keyboards.classes,
            },
        });
    }
    if (query.data === "monday_5a") {
        sending_5A_Monday(chatId)
    }
    if (query.data === "tuesday_5a") {
        sending_5A_Tuesday(chatId)
    }
    if (query.data === "wednesday_5a") {
        sending_5A_Wednesday(chatId)
    }
    if (query.data === "thursday_5a") {
        sending_5A_Thursday(chatId)
    }
    if (query.data === "friday_5a") {
        sending_5A_Friday(chatId)
    }
    if (query.data === "monday_5b") {
        sending_5B_Monday(chatId)
    }
    if (query.data === "tuesday_5b") {
        sending_5B_Tuesday(chatId)
    }
    if (query.data === "wednesday_5b") {
        sending_5B_Wednesday(chatId)
    }
    if (query.data === "thursday_5b") {
        sending_5B_Thursday(chatId)
    }
    if (query.data === "friday_5b") {
        sending_5B_Friday(chatId)
    }
    if (query.data === "monday_5v") {
        sending_5V_Monday(chatId)
    }
    if (query.data === "tuesday_5v") {
        sending_5V_Tuesday(chatId)
    }
    if (query.data === "wednesday_5v") {
        sending_5V_Wednesday(chatId)
    }
    if (query.data === "thursday_5v") {
        sending_5V_Thursday(chatId)
    }
    if (query.data === "friday_5v") {
        sending_5V_Friday(chatId)
    }
    if (query.data === "monday_6a") {
        sending_6A_Monday(chatId)
    }
    if (query.data === "tuesday_6a") {
        sending_6A_Tuesday(chatId)
    }
    if (query.data === "wednesday_6a") {
        sending_6A_Wednesday(chatId)
    }
    if (query.data === "thursday_6a") {
        sending_6A_Thursday(chatId)
    }
    if (query.data === "friday_6a") {
        sending_6A_Friday(chatId)
    }
    if (query.data === "monday_6b") {
        sending_6B_Monday(chatId)
    }
    if (query.data === "tuesday_6b") {
        sending_6B_Tuesday(chatId)
    }
    if (query.data === "wednesday_6b") {
        sending_6B_Wednesday(chatId)
    }
    if (query.data === "thursday_6b") {
        sending_6B_Thursday(chatId)
    }
    if (query.data === "friday_6b") {
        sending_6B_Friday(chatId)
    }
    if (query.data === "monday_6v") {
        sending_6V_Monday(chatId)
    }
    if (query.data === "tuesday_6v") {
        sending_6V_Tuesday(chatId)
    }
    if (query.data === "wednesday_6v") {
        sending_6V_Wednesday(chatId)
    }
    if (query.data === "thursday_6v") {
        sending_6V_Thursday(chatId)
    }
    if (query.data === "friday_6v") {
        sending_6V_Friday(chatId)
    }
    if (query.data === "monday_7a") {
        sending_7A_Monday(chatId)
    }
    if (query.data === "tuesday_7a") {
        sending_7A_Tuesday(chatId)
    }
    if (query.data === "wednesday_7a") {
        sending_7A_Wednesday(chatId)
    }
    if (query.data === "thursday_7a") {
        sending_7A_Thursday(chatId)
    }
    if (query.data === "friday_7a") {
        sending_7A_Friday(chatId)
    }
    if (query.data === "monday_7b") {
        sending_7B_Monday(chatId)
    }
    if (query.data === "tuesday_7b") {
        sending_7B_Tuesday(chatId)
    }
    if (query.data === "wednesday_7b") {
        sending_7B_Wednesday(chatId)
    }
    if (query.data === "thursday_7b") {
        sending_7B_Thursday(chatId)
    }
    if (query.data === "friday_7b") {
        sending_7B_Friday(chatId)
    }
    if (query.data === "monday_7v") {
        sending_7V_Monday(chatId)
    }
    if (query.data === "tuesday_7v") {
        sending_7V_Tuesday(chatId)
    }
    if (query.data === "wednesday_7v") {
        sending_7V_Wednesday(chatId)
    }
    if (query.data === "thursday_7v") {
        sending_7V_Thursday(chatId)
    }
    if (query.data === "friday_7v") {
        sending_7V_Friday(chatId)
    }
    if (query.data === "monday_8a") {
        sending_8A_Monday(chatId)
    }
    if (query.data === "tuesday_8a") {
        sending_8A_Tuesday(chatId)
    }
    if (query.data === "wednesday_8a") {
        sending_8A_Wednesday(chatId)
    }
    if (query.data === "thursday_8a") {
        sending_8A_Thursday(chatId)
    }
    if (query.data === "friday_8a") {
        sending_8A_Friday(chatId)
    }
    if (query.data === "monday_8b") {
        sending_8B_Monday(chatId)
    }
    if (query.data === "tuesday_8b") {
        sending_8B_Tuesday(chatId)
    }
    if (query.data === "wednesday_8b") {
        sending_8B_Wednesday(chatId)
    }
    if (query.data === "thursday_8b") {
        sending_8B_Thursday(chatId)
    }
    if (query.data === "friday_8b") {
        sending_8B_Friday(chatId)
    }
    if (query.data === "monday_8v") {
        sending_8V_Monday(chatId)
    }
    if (query.data === "tuesday_8v") {
        sending_8V_Tuesday(chatId)
    }
    if (query.data === "wednesday_8v") {
        sending_8V_Wednesday(chatId)
    }
    if (query.data === "thursday_8v") {
        sending_8V_Thursday(chatId)
    }
    if (query.data === "friday_8v") {
        sending_8V_Friday(chatId)
    }
    if (query.data === "monday_9a") {
        sending_9A_Monday(chatId)
    }
    if (query.data === "tuesday_9a") {
        sending_9A_Tuesday(chatId)
    }
    if (query.data === "wednesday_9a") {
        sending_9A_Wednesday(chatId)
    }
    if (query.data === "thursday_9a") {
        sending_9A_Thursday(chatId)
    }
    if (query.data === "friday_9a") {
        sending_9A_Friday(chatId)
    }
    if (query.data === "monday_9b") {
        sending_9B_Monday(chatId)
    }
    if (query.data === "tuesday_9b") {
        sending_9B_Tuesday(chatId)
    }
    if (query.data === "wednesday_9b") {
        sending_9B_Wednesday(chatId)
    }
    if (query.data === "thursday_9b") {
        sending_9B_Thursday(chatId)
    }
    if (query.data === "friday_9b") {
        sending_9B_Friday(chatId)
    }
    if (query.data === "monday_9v") {
        sending_9V_Monday(chatId)
    }
    if (query.data === "tuesday_9v") {
        sending_9V_Tuesday(chatId)
    }
    if (query.data === "wednesday_9v") {
        sending_9V_Wednesday(chatId)
    }
    if (query.data === "thursday_9v") {
        sending_9V_Thursday(chatId)
    }
    if (query.data === "friday_9v") {
        sending_9V_Friday(chatId)
    }
    if (query.data === "monday_10a") {
        sending_10A_Monday(chatId)
    }
    if (query.data === "tuesday_10a") {
        sending_10A_Tuesday(chatId)
    }
    if (query.data === "wednesday_10a") {
        sending_10A_Wednesday(chatId)
    }
    if (query.data === "thursday_10a") {
        sending_10A_Thursday(chatId)
    }
    if (query.data === "friday_10a") {
        sending_10A_Friday(chatId)
    }
    if (query.data === "monday_10b") {
        sending_10B_Monday(chatId)
    }
    if (query.data === "tuesday_10b") {
        sending_10B_Tuesday(chatId)
    }
    if (query.data === "wednesday_10b") {
        sending_10B_Wednesday(chatId)
    }
    if (query.data === "thursday_10b") {
        sending_10B_Thursday(chatId)
    }
    if (query.data === "friday_10b") {
        sending_10B_Friday(chatId)
    }
    if (query.data === "monday_11a") {
        sending_11A_Monday(chatId)
    }
    if (query.data === "tuesday_11a") {
        sending_11A_Tuesday(chatId)
    }
    if (query.data === "wednesday_11a") {
        sending_11A_Wednesday(chatId)
    }
    if (query.data === "thursday_11a") {
        sending_11A_Thursday(chatId)
    }
    if (query.data === "friday_11a") {
        sending_11A_Friday(chatId)
    }
    if (query.data === "monday_11b") {
        sending_11B_Monday(chatId)
    }
    if (query.data === "tuesday_11b") {
        sending_11B_Tuesday(chatId)
    }
    if (query.data === "wednesday_11b") {
        sending_11B_Wednesday(chatId)
    }
    if (query.data === "thursday_11b") {
        sending_11B_Thursday(chatId)
    }
    if (query.data === "friday_11b") {
        sending_11B_Friday(chatId)
    }
    if (query.data === "about_author") {
        about_author(chatId)
    }
});

/*------------------------------------------------------------------------------------------------------*/
function sending_5A_Monday(chatId) {
    let fileContent = fs.readFileSync("./5_классы/5А/Понедельник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_5a
        }
    });
}

function sending_5A_Tuesday(chatId) {
    let fileContent = fs.readFileSync("./5_классы/5А/Вторник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_5a
        }
    });
}

function sending_5A_Wednesday(chatId) {
    let fileContent = fs.readFileSync("./5_классы/5А/Среда.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_5a
        }
    });
}

function sending_5A_Thursday(chatId) {
    let fileContent = fs.readFileSync("./5_классы/5А/Четверг.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_5a
        }
    });
}

function sending_5A_Friday(chatId) {
    let fileContent = fs.readFileSync("./5_классы/5А/Пятница.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_5a
        }
    });
}

function sending_5B_Monday(chatId) {
    let fileContent = fs.readFileSync("./5_классы/5Б/Понедельник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_5b
        }
    });
}

function sending_5B_Tuesday(chatId) {
    let fileContent = fs.readFileSync("./5_классы/5Б/Вторник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_5b
        }
    });
}

function sending_5B_Wednesday(chatId) {
    let fileContent = fs.readFileSync("./5_классы/5Б/Среда.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_5b
        }
    });
}

function sending_5B_Thursday(chatId) {
    let fileContent = fs.readFileSync("./5_классы/5Б/Четверг.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_5b
        }
    });
}

function sending_5B_Friday(chatId) {
    let fileContent = fs.readFileSync("./5_классы/5Б/Пятница.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_5b
        }
    });
}

function sending_5V_Monday(chatId) {
    let fileContent = fs.readFileSync("./5_классы/5В/Понедельник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_5v
        }
    });
}

function sending_5V_Tuesday(chatId) {
    let fileContent = fs.readFileSync("./5_классы/5В/Вторник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_5v
        }
    });
}

function sending_5V_Wednesday(chatId) {
    let fileContent = fs.readFileSync("./5_классы/5В/Среда.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_5v
        }
    });
}

function sending_5V_Thursday(chatId) {
    let fileContent = fs.readFileSync("./5_классы/5В/Четверг.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_5v
        }
    });
}

function sending_5V_Friday(chatId) {
    let fileContent = fs.readFileSync("./5_классы/5В/Пятница.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_5v
        }
    });
}
/*------------------------------------------------------------------------------------------------------*/
function sending_6A_Monday(chatId) {
    let fileContent = fs.readFileSync("./6_классы/6А/Понедельник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_6a
        }
    });
}

function sending_6A_Tuesday(chatId) {
    let fileContent = fs.readFileSync("./6_классы/6А/Вторник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_6a
        }
    });
}

function sending_6A_Wednesday(chatId) {
    let fileContent = fs.readFileSync("./6_классы/6А/Среда.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_6a
        }
    });
}

function sending_6A_Thursday(chatId) {
    let fileContent = fs.readFileSync("./6_классы/6А/Четверг.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_6a
        }
    });
}

function sending_6A_Friday(chatId) {
    let fileContent = fs.readFileSync("./6_классы/6А/Пятница.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_6a
        }
    });
}

function sending_6B_Monday(chatId) {
    let fileContent = fs.readFileSync("./6_классы/6Б/Понедельник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_6b
        }
    });
}

function sending_6B_Tuesday(chatId) {
    let fileContent = fs.readFileSync("./6_классы/6Б/Вторник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_6b
        }
    });
}

function sending_6B_Wednesday(chatId) {
    let fileContent = fs.readFileSync("./6_классы/6Б/Среда.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_6b
        }
    });
}

function sending_6B_Thursday(chatId) {
    let fileContent = fs.readFileSync("./6_классы/6Б/Четверг.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_6b
        }
    });
}

function sending_6B_Friday(chatId) {
    let fileContent = fs.readFileSync("./6_классы/6Б/Пятница.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_6b
        }
    });
}

function sending_6V_Monday(chatId) {
    let fileContent = fs.readFileSync("./6_классы/6В/Понедельник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_6v
        }
    });
}

function sending_6V_Tuesday(chatId) {
    let fileContent = fs.readFileSync("./6_классы/6В/Вторник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_6v
        }
    });
}

function sending_6V_Wednesday(chatId) {
    let fileContent = fs.readFileSync("./6_классы/6В/Среда.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_6v
        }
    });
}

function sending_6V_Thursday(chatId) {
    let fileContent = fs.readFileSync("./6_классы/6В/Четверг.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_6v
        }
    });
}

function sending_6V_Friday(chatId) {
    let fileContent = fs.readFileSync("./6_классы/6В/Пятница.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_6v
        }
    });
}
/*------------------------------------------------------------------------------------------------------*/
function sending_7A_Monday(chatId) {
    let fileContent = fs.readFileSync("./7_классы/7А/Понедельник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_7a
        }
    });
}

function sending_7A_Tuesday(chatId) {
    let fileContent = fs.readFileSync("./7_классы/7А/Вторник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_7a
        }
    });
}

function sending_7A_Wednesday(chatId) {
    let fileContent = fs.readFileSync("./7_классы/7А/Среда.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_7a
        }
    });
}

function sending_7A_Thursday(chatId) {
    let fileContent = fs.readFileSync("./7_классы/7А/Четверг.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_7a
        }
    });
}

function sending_7A_Friday(chatId) {
    let fileContent = fs.readFileSync("./7_классы/7А/Пятница.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_7a
        }
    });
}

function sending_7B_Monday(chatId) {
    let fileContent = fs.readFileSync("./7_классы/7Б/Понедельник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_7b
        }
    });
}

function sending_7B_Tuesday(chatId) {
    let fileContent = fs.readFileSync("./7_классы/7Б/Вторник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_7b
        }
    });
}

function sending_7B_Wednesday(chatId) {
    let fileContent = fs.readFileSync("./7_классы/7Б/Среда.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_7b
        }
    });
}

function sending_7B_Thursday(chatId) {
    let fileContent = fs.readFileSync("./7_классы/7Б/Четверг.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_7b
        }
    });
}

function sending_7B_Friday(chatId) {
    let fileContent = fs.readFileSync("./7_классы/7Б/Пятница.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_7b
        }
    });
}

function sending_7V_Monday(chatId) {
    let fileContent = fs.readFileSync("./7_классы/7В/Понедельник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_7v
        }
    });
}

function sending_7V_Tuesday(chatId) {
    let fileContent = fs.readFileSync("./7_классы/7В/Вторник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_7v
        }
    });
}

function sending_7V_Wednesday(chatId) {
    let fileContent = fs.readFileSync("./7_классы/7В/Среда.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_7v
        }
    });
}

function sending_7V_Thursday(chatId) {
    let fileContent = fs.readFileSync("./7_классы/7В/Четверг.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_7v
        }
    });
}

function sending_7V_Friday(chatId) {
    let fileContent = fs.readFileSync("./7_классы/7В/Пятница.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_7v
        }
    });
}
/*------------------------------------------------------------------------------------------------------*/
function sending_8A_Monday(chatId) {
    let fileContent = fs.readFileSync("./8_классы/8А/Понедельник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_8a
        }
    });
}

function sending_8A_Tuesday(chatId) {
    let fileContent = fs.readFileSync("./8_классы/8А/Вторник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_8a
        }
    });
}

function sending_8A_Wednesday(chatId) {
    let fileContent = fs.readFileSync("./8_классы/8А/Среда.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_8a
        }
    });
}

function sending_8A_Thursday(chatId) {
    let fileContent = fs.readFileSync("./8_классы/8А/Четверг.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_8a
        }
    });
}

function sending_8A_Friday(chatId) {
    let fileContent = fs.readFileSync("./8_классы/8А/Пятница.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_8a
        }
    });
}

function sending_8B_Monday(chatId) {
    let fileContent = fs.readFileSync("./8_классы/8Б/Понедельник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_8b
        }
    });
}

function sending_8B_Tuesday(chatId) {
    let fileContent = fs.readFileSync("./8_классы/8Б/Вторник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_8b
        }
    });
}

function sending_8B_Wednesday(chatId) {
    let fileContent = fs.readFileSync("./8_классы/8Б/Среда.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_8b
        }
    });
}

function sending_8B_Thursday(chatId) {
    let fileContent = fs.readFileSync("./8_классы/8Б/Четверг.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_8b
        }
    });
}

function sending_8B_Friday(chatId) {
    let fileContent = fs.readFileSync("./8_классы/8Б/Пятница.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_8b
        }
    });
}

function sending_8V_Monday(chatId) {
    let fileContent = fs.readFileSync("./8_классы/8В/Понедельник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_8v
        }
    });
}

function sending_8V_Tuesday(chatId) {
    let fileContent = fs.readFileSync("./8_классы/8В/Вторник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_8v
        }
    });
}

function sending_8V_Wednesday(chatId) {
    let fileContent = fs.readFileSync("./8_классы/8В/Среда.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_8v
        }
    });
}

function sending_8V_Thursday(chatId) {
    let fileContent = fs.readFileSync("./8_классы/8В/Четверг.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_8v
        }
    });
}

function sending_8V_Friday(chatId) {
    let fileContent = fs.readFileSync("./8_классы/8В/Пятница.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_8v
        }
    });
}
/*---------------------------------------------------------------------------------------------------*/
function sending_9A_Monday(chatId) {
    let fileContent = fs.readFileSync("./9_классы/9А/Понедельник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_9a
        }
    });
}

function sending_9A_Tuesday(chatId) {
    let fileContent = fs.readFileSync("./9_классы/9А/Вторник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_9a
        }
    });
}

function sending_9A_Wednesday(chatId) {
    let fileContent = fs.readFileSync("./9_классы/9А/Среда.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_9a
        }
    });
}

function sending_9A_Thursday(chatId) {
    let fileContent = fs.readFileSync("./9_классы/9А/Четверг.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_9a
        }
    });
}

function sending_9A_Friday(chatId) {
    let fileContent = fs.readFileSync("./9_классы/9А/Пятница.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_9a
        }
    });
}

function sending_9B_Monday(chatId) {
    let fileContent = fs.readFileSync("./9_классы/9Б/Понедельник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_9b
        }
    });
}

function sending_9B_Tuesday(chatId) {
    let fileContent = fs.readFileSync("./9_классы/9Б/Вторник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_9b
        }
    });
}

function sending_9B_Wednesday(chatId) {
    let fileContent = fs.readFileSync("./9_классы/9Б/Среда.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_9b
        }
    });
}

function sending_9B_Thursday(chatId) {
    let fileContent = fs.readFileSync("./9_классы/9Б/Четверг.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_9b
        }
    });
}

function sending_9B_Friday(chatId) {
    let fileContent = fs.readFileSync("./9_классы/9Б/Пятница.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_9b
        }
    });
}

function sending_9V_Monday(chatId) {
    let fileContent = fs.readFileSync("./9_классы/9В/Понедельник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_9v
        }
    });
}

function sending_9V_Tuesday(chatId) {
    let fileContent = fs.readFileSync("./9_классы/9В/Вторник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_9v
        }
    });
}

function sending_9V_Wednesday(chatId) {
    let fileContent = fs.readFileSync("./9_классы/9В/Среда.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_9v
        }
    });
}

function sending_9V_Thursday(chatId) {
    let fileContent = fs.readFileSync("./9_классы/9В/Четверг.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_9v
        }
    });
}

function sending_9V_Friday(chatId) {
    let fileContent = fs.readFileSync("./9_классы/9В/Пятница.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_9v
        }
    });
}
/*-----------------------------------------------------------------------------------------------------*/

function sending_10A_Monday(chatId) {
    let fileContent = fs.readFileSync("./10_классы/10А/Понедельник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_10a
        }
    });
}

function sending_10A_Tuesday(chatId) {
    let fileContent = fs.readFileSync("./10_классы/10А/Вторник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_10a
        }
    });
}

function sending_10A_Wednesday(chatId) {
    let fileContent = fs.readFileSync("./10_классы/10А/Среда.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_10a
        }
    });
}

function sending_10A_Thursday(chatId) {
    let fileContent = fs.readFileSync("./10_классы/10А/Четверг.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_10a
        }
    });
}

function sending_10A_Friday(chatId) {
    let fileContent = fs.readFileSync("./10_классы/10А/Пятница.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_10a
        }
    });
}

function sending_10B_Monday(chatId) {
    let fileContent = fs.readFileSync("./10_классы/10Б/Понедельник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_10b
        }
    });
}

function sending_10B_Tuesday(chatId) {
    let fileContent = fs.readFileSync("./10_классы/10Б/Вторник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_10b
        }
    });
}

function sending_10B_Wednesday(chatId) {
    let fileContent = fs.readFileSync("./10_классы/10Б/Среда.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_10b
        }
    });
}

function sending_10B_Thursday(chatId) {
    let fileContent = fs.readFileSync("./10_классы/10Б/Четверг.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_10b
        }
    });
}

function sending_10B_Friday(chatId) {
    let fileContent = fs.readFileSync("./10_классы/10Б/Пятница.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_10b
        }
    });
}
/*----------------------------------------------------------------------------------------------------*/
function sending_11A_Monday(chatId) {
    let fileContent = fs.readFileSync("./11_классы/11А/Понедельник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_11a
        }
    });
}

function sending_11A_Tuesday(chatId) {
    let fileContent = fs.readFileSync("./11_классы/11А/Вторник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_11a
        }
    });
}

function sending_11A_Wednesday(chatId) {
    let fileContent = fs.readFileSync("./11_классы/11А/Среда.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_11a
        }
    });
}

function sending_11A_Thursday(chatId) {
    let fileContent = fs.readFileSync("./11_классы/11А/Четверг.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_11a
        }
    });
}

function sending_11A_Friday(chatId) {
    let fileContent = fs.readFileSync("./11_классы/11А/Пятница.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_11a
        }
    });
}

function sending_11B_Monday(chatId) {
    let fileContent = fs.readFileSync("./11_классы/11Б/Понедельник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_11b
        }
    });
}

function sending_11B_Tuesday(chatId) {
    let fileContent = fs.readFileSync("./11_классы/11Б/Вторник.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_11b
        }
    });
}

function sending_11B_Wednesday(chatId) {
    let fileContent = fs.readFileSync("./11_классы/11Б/Среда.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_11b
        }
    });
}

function sending_11B_Thursday(chatId) {
    let fileContent = fs.readFileSync("./11_классы/11Б/Четверг.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_11b
        }
    });
}

function sending_11B_Friday(chatId) {
    let fileContent = fs.readFileSync("./11_классы/11Б/Пятница.txt", "utf8")
    bot.sendMessage(chatId, fileContent, {
        reply_markup: {
            inline_keyboard: day_of_the_week_for_11b
        }
    });
}
/*---------------------------------------------------------------------------------------------------*/
function about_author(chatId) {
    const url = "https://vamotkrytka.ru/_ph/160/2/815814498.jpg"
    const message = `[ГЕНИЙ](${url}), МИЛЛИАРДЕР, PLAYBOY, PHILANTHROPIST`
    bot.sendMessage(chatId, message, {
        parse_mode: "Markdown",
        reply_markup: {
            inline_keyboard: author
        }
    })
}
/*---------------------------------------------------------------------------------------------------*/
console.log("Бот запущен")