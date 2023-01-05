module.exports = {
    gameOptions : {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: '1', callback_data: '1'}, {text: '2', callback_data: '2'}, {text: '3', callback_data: '3'}],
                [{text: '4', callback_data: '4'}, {text: '5', callback_data: '5'}, {text: '6', callback_data: '6'}],
                [{text: '7', callback_data: '7'}, {text: '8', callback_data: '8'}, {text: '9', callback_data: '9'}],
                [{text: '0', callback_data: '0'}],
            ]
        }),
    },
    
    againOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Играть еще раз', callback_data: '/again'}],
            ]
        }),
    },

    complimentOption: {
        reply_markup: JSON.stringify({
            keyboard: [
                [{text: 'Хочу комплимент', callback_data: '/get_compliment'}],
            ]
        }),
    },
    
    imagesOption: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Получить воспоминания в виде фото', callback_data: '/get_image'}],
            ]
        }),
    },

    videosOption: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Получить воспоминания в виде видео', callback_data: '/get_video'}],
            ]
        }),
    },
    
    compliments : [
        'Ты самая прекрасная девушка',
        'Я тебя очень сильно люблю',
        'Пожалуйста улыбайся, у тебя очень красивая улыбка',
        'Ты самая мудрая из всех девушек кого я встречал, ты моя направительница',
        'Спасибо тебе за то что ты была всегда рядом, ты самая добрая',
        'Именно ты показала мне что такое настоящая любовь', 
        'Твои самые красивые и темные глаза, даже в темноте самые яркие и прекрасные',
        'Тиии же мое солнышко',
        'Тиии же моя еркешка',
        'Ты объеденяешь в себе красоту и женственность, сильный и мудрый характер',
        'Все что есть в тебе я люблю',
        'Ты такая сладкая когда улыбаешься, почаще улыбайся',
    ],

    imagesURL: [  //I didn't bother with the name of the files
        './images/image1.jpg',
        './images/image2.jpg',
        './images/image3.jpg',
        './images/image4.jpg',
        './images/image5.jpg',
        './images/image6.jpg',
        './images/image7.jpg',
        './images/image8.jpg',
        './images/image9.jpg',
        './images/image10.jpg',
        './images/image11.jpg',
        './images/image12.jpg',
        './images/image13.jpg',
        './images/image14.jpg',
    ],
    
    videosURL: [
        './videos/video1.mp4',
        './videos/video2.mp4',
        './videos/video3.mp4',
        './videos/video4.mp4',
        './videos/video5.mp4',
    ]

};