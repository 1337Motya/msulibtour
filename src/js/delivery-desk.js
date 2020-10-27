var extension = sessionStorage.webpSupport === 'true' ? 'webp' : 'jpg';

pannellum.viewer('train_scene', {
    "autoLoad": true,
    "showControls": false,
    "compass": false,
    "hfov": 180,
    "autoRotate": -2,
    "default": {
        "firstScene": "second_floor",
    },

    "scenes": {
        "second_floor": {
            "type": "equirectangular",
            "panorama": "../img/delivery-desk/1." + extension,
            'yaw': 60,
            "hotSpots": [
                {
                    "pitch": -5,
                    "yaw": 58,
                    "type": "scene",
                    "text": "Абонемент учебной литературы",
                    "sceneId": "educational_literature"
                },
                {
                    "pitch": -5,
                    "yaw": 40,
                    "type": "scene",
                    "text": "Лестница вниз",
                    "sceneId": "first_floor_corridor_start"
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
        "educational_literature": {
            "type": "equirectangular",
            "panorama": "../img/delivery-desk/2." + extension,
            "hotSpots": [
                {
                    "pitch": -13,
                    "yaw": 172,
                    "type": "scene",
                    "text": "Коридор",
                    "sceneId": "second_floor"
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
                },
                {
                    "pitch": 2,
                    "yaw": 84,
                    "type": "info",
                    "text": "Администрация библиотеки"
                }
            ]
        },
        "first_floor_corridor_start": {
            "type": "equirectangular",
            "panorama": "../img/delivery-desk/3." + extension,
            "hotSpots": [
                {
                    "pitch": 2,
                    "yaw": -11,
                    "type": "scene",
                    "text": "Лестница наверх",
                    "sceneId": "second_floor"
                },
                {
                    "pitch": 2,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Абонемент научной и художественной литературы",
                    "sceneId": "scientific_literature"
                },
                {
                    "pitch": -8,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Конец коридора",
                    "sceneId": "first_floor_corridor_end"
                }
            ]
        },
        "scientific_literature": {
            "type": "equirectangular",
            "panorama": "../img/delivery-desk/4." + extension,
            "hotSpots": [
                {
                    "pitch": -9,
                    "yaw": 181,
                    "type": "scene",
                    "text": "Коридор",
                    "sceneId": "first_floor_corridor_start"
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
                },
                {
                    "pitch": 2,
                    "yaw": 108,
                    "type": "info",
                    "text": "Администрация библиотеки"
                }
            ]
        },
        "first_floor_corridor_end": {
            "type": "equirectangular",
            "panorama": "../img/delivery-desk/5." + extension,
            "yaw": 130,
            "hotSpots": [
                {
                    "pitch": -9,
                    "yaw": 146,
                    "type": "scene",
                    "text": "Читальный зал редких изданий",
                    "sceneId": "rare_publications"
                },
                {
                    "pitch": -3,
                    "yaw": 1,
                    "type": "scene",
                    "text": "Начало коридора",
                    "sceneId": "first_floor_corridor_start"
                },
                {
                    "pitch": -4,
                    "yaw": -16,
                    "type": "info",
                    "text": "Отдел формирования информационных ресурсов"
                }
            ]
        },
        "rare_publications": {
            "type": "equirectangular",
            "panorama": "../img/delivery-desk/6." + extension,
            "hotSpots": [
                {
                    "pitch": -5,
                    "yaw": 70,
                    "type": "scene",
                    "text": "Коридор",
                    "sceneId": "first_floor_corridor_end"
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