pannellum.viewer('train_scene', {
    "autoLoad": true,
    "showControls": false,
    "compass": false,
    "hfov": 180,
    "default": {
        "firstScene": "fsttrain",
    },

    "scenes": {
        "fsttrain": {
            "type": "equirectangular",
            "panorama": "../img/train-room/1.jpg",
            'yaw': 60,
            "hotSpots": [
                {
                    "pitch": -5,
                    "yaw": 58,
                    "type": "scene",
                    "text": "Абонемент учебной литературы",
                    "sceneId": "scndtrain"
                },
                {
                    "pitch": -5,
                    "yaw": 40,
                    "type": "scene",
                    "text": "Лестница вниз",
                    "sceneId": "thrdtrain"
                },
                {
                    "pitch": 7,
                    "yaw": 150,
                    "type": "info",
                    "text": "Структура библиотеки. Объявления",
                    "URL": "https://library.msu.by/o-biblioteke/struktura-biblioteki"
                },
                {
                    "pitch": 0,
                    "yaw": 105,
                    "type": "info",
                    "text": "Списки новой литературы",
                    "URL": "https://library.msu.by/resursy/spisok-novoj-literatury-arkhiv"
                }
            ]
        },
        "scndtrain": {
            "type": "equirectangular",
            "panorama": "../img/train-room/2.jpg",
            "hotSpots": [
                {
                    "pitch": -13,
                    "yaw": 172,
                    "type": "scene",
                    "text": "Коридор",
                    "sceneId": "fsttrain"
                },
                {
                    "pitch": -7,
                    "yaw": 360,
                    "type": "info",
                    "text": "Кафедра обслуживания пользователей"
                },
                {
                    "pitch": 6,
                    "yaw": 310,
                    "type": "info",
                    "text": "Фонд учебной, учебно-методической литературы"
                },
                {
                    "pitch": -4,
                    "yaw": 264,
                    "type": "info",
                    "text": "Выставка новых учебных изданий"
                }
            ]
        },
        "thrdtrain": {
            "type": "equirectangular",
            "panorama": "../img/train-room/3.jpg",
            "hotSpots": [
                {
                    "pitch": 2,
                    "yaw": -11,
                    "type": "scene",
                    "text": "Лестница наверх",
                    "sceneId": "fsttrain"
                },
                {
                    "pitch": 2,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Абонемент научной и художественной литературы",
                    "sceneId": "frthtrain"
                },
                {
                    "pitch": -8,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Конец коридора",
                    "sceneId": "ffthtrain"
                }
            ]
        },
        "frthtrain": {
            "type": "equirectangular",
            "panorama": "../img/train-room/4.jpg",
            "hotSpots": [
                {
                    "pitch": -9,
                    "yaw": 181,
                    "type": "scene",
                    "text": "Коридор",
                    "sceneId": "thrdtrain"
                },
                {
                    "pitch": -9,
                    "yaw": 359,
                    "type": "info",
                    "text": "Кафедра обслуживания пользователей"
                },
                {
                    "pitch": 6,
                    "yaw": 340,
                    "type": "info",
                    "text": "Фонд учебной, учебно-методической литературы"
                }
            ]
        },
        "ffthtrain": {
            "type": "equirectangular",
            "panorama": "../img/train-room/5.jpg",
            "yaw": 130,
            "hotSpots": [
                {
                    "pitch": -9,
                    "yaw": 146,
                    "type": "scene",
                    "text": "Читальный зал редких изданий",
                    "sceneId": "sixthtrain"
                },
                {
                    "pitch": -3,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Начало коридора",
                    "sceneId": "thrdtrain"
                }
            ]
        },
        "sixthtrain": {
            "type": "equirectangular",
            "panorama": "../img/train-room/6.jpg",
            "hotSpots": [
                {
                    "pitch": -5,
                    "yaw": 70,
                    "type": "scene",
                    "text": "Коридор",
                    "sceneId": "ffthtrain"
                },
                {
                    "pitch": 2,
                    "yaw": 293,
                    "type": "info",
                    "text": "Информационная выставка раритетов",
                },
                {
                    "pitch": 2,
                    "yaw": 280,
                    "type": "info",
                    "text": "Фонд редких изданий",
                    "URL": "https://library.msu.by/resursy/fondy-i-kollektsii/fond-redkikh-izdanij"
                }
            ]
        }
    }
});