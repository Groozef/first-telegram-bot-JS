const TelegramApi = require('node-telegram-bot-api');
const {gameOptions, againOptions, compliments, complimentOption, imagesURL, videosURL, memoriesURL, imagesOption, videosOption} = require('./options.js');

const token = '5901756872:AAFp86WyAkPxwTqByICu5TtOjjAber7YOXY';

const bot = new TelegramApi(token, {polling: true});

const chats = {};

// Get comliment function:
const getCompliment = async (chatId) => {
    await bot.sendMessage(chatId, compliments[Math.floor(Math.random() * compliments.length)]);
};

// Start game function
const startGame = async (chatId) => {
    await bot.sendMessage(
        chatId, 
        'Солнышко, сейчас я загадаю цифру от 0 до 9. Если отгадаешь,\nполучишь приз в виде комплимента'
    );  
    const random = Math.floor(Math.random() * 10);
    chats[chatId] = random;
    await bot.sendMessage(chatId, 'Отгадай', gameOptions);
};

// Send images function
const sendImage = async (chatId) => {
    await bot.sendPhoto(chatId, imagesURL[Math.floor(Math.random() * imagesURL.length)]);
};

// Send videos function
const sendVideos = async (chatId) => {
    await bot.sendPhoto(chatId, videosOption[Math.floor(Math.random() * videosURL.length)]);
};

// BTNS
const complimentBtn = async (chatId) => {
    await bot.sendMessage(chatId, 'Если ты хочешь просто получить комплимент, то нажми на глвную кнопку', complimentOption);
};

const imageBtn = async (chatId) => {
    await bot.sendMessage(
        chatId, 
        'Если ты хочешь просто получить воспоминание в виде фото, то нажми на кнопку', 
        imagesOption
    );
};

const videoBtn = async (chatId) => {
    await bot.sendMessage(
        chatId, 
        'Если ты хочешь просто получить воспоминание в виде видео, то нажми на кнопку', 
        videosOption
    );
};

const start = () => {
    bot.setMyCommands = [
        {command: '/start', description: 'Начальное приветствие'},
        {command: '/info', description: 'Основная информация'},
        {command: '/game', description: 'Мини игра на добычу комплимента'},
        {command: '/get_image', description: 'Получить фото'},
        {command: '/get_video', description: 'Получить видео'},

    ];
    // message event:
    bot.on('message', async msg => {
        const text = msg.text,
              chatId = msg.chat.id;

        // Start message
        if (text === '/start') {
            await complimentBtn(chatId);
            await imageBtn(chatId);
            await videoBtn(chatId);
            await bot.sendSticker( // Send Sticker
                chatId, 
                'https://tlgrm.ru/_/stickers/701/a96/701a9683-75bf-3aab-ae34-b1e126686e1d/3.webp'
            );
            return bot.sendMessage( // Send Hello Message
                chatId, 
                'Приветствую, этот канал пренадлежит исключительно для Севары Жураевой.\n\n Если это ты солнце, то добро пожаловать.',
            );

        }

        if (text === '/info') {
            complimentBtn(chatId);
            imageBtn(chatId);
            videoBtn(chatId);
            return bot.sendMessage( // Send Hello Message
            chatId, 
            'Этот Бот был создан, исключительно для Севары Жураевой.\n\nСолнышко, если ты обидешься, или же тебе будет скучно или же ты будешь сильно скучать, то этого бота я специально написал лично для тебя.\n\n Здесь ты сможешь:\n    -поиграть в мини игру;\n    -получить просто комплимент;\n    -посмотреть воспоминания;\n\nP.S. Твой непутевый Тима',
            complimentOption
        );
        }

        if (text === '/game') {
            complimentBtn(chatId);
            imageBtn(chatId);
            videoBtn(chatId);
            return startGame(chatId);
        }
        
        if (text == '/get_compliment' || text == 'Хочу комплимент') {
            return getCompliment(chatId);
        }

        if (text === '/get_image') {
            return sendImage(chatId);
        }
        
        if (text === '/get_video') {
            return sendVideos(chatId);
        }


        return bot.sendMessage(chatId, 'Солнышко, я тебя не понял.\nПопробуй ещё раз');

    });

    // Game event
    bot.on('callback_query', async msg => {
        const data = msg.data,
              chatId = msg.message.chat.id;
        if (data == '/again') {
            complimentBtn(chatId);
            imageBtn(chatId);
            videoBtn(chatId);
            return startGame(chatId);
        }


        if(data == chats[chatId]) {
            complimentBtn(chatId);
            imageBtn(chatId);
            videoBtn(chatId);
            await bot.sendMessage(chatId, 'Умница моя, ты отгадала цифру', againOptions);
            return getCompliment(chatId);
        } else {
            complimentBtn(chatId);
            return bot.sendMessage(chatId, `Солнышко, Попробуй еще раз. Я в тебя верю\n\n(Я загадал цифру: ${chats[chatId]})`, againOptions);
        }
    });

    bot.on('callback_query', async msg => {
        const data = msg.data,
              chatId = msg.message.chat.id;

        if (data == '/get_compliment') {
            return getCompliment(chatId);
        }

        if (data == '/get_image') {
            return sendImage(chatId);
        }

        if (data == '/get_video') {
            return sendVideos(chatId);
        }
    });
};
start();