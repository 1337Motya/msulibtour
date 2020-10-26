
var extesion = localStorage.webpSupport === false ? 'jpg' : 'webp';

pannellum.viewer('rd_scene', {
    "autoLoad": true,
    "showControls": false,
    "compass": false,
    "hfov": 180,
    "autoRotate": -2,
    "default": {
        "firstScene": "corridor",
    },

    "scenes": {
        "corridor": {
            "type": "equirectangular",
            "panorama": "../img/reading-hall/1." + extesion,
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 370,
                    "type": "scene",
                    "text": "Читальный зал",
                    "sceneId": "reception"
                }
            ]
        },
        "reception": {
            "type": "equirectangular",
            "panorama": "../img/reading-hall/2." + extesion,
            "yaw": 180,
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": -7,
                    "type": "scene",
                    "text": "Коридор",
                    "sceneId": "corridor"
                },
                {
                    "pitch": -8,
                    "yaw": 90,
                    "type": "info",
                    "text": "Кафедра выдачи литературы",
                },
                {
                    "pitch": 0,
                    "yaw": 75,
                    "type": "info",
                    "text": "Книжный фонд читального зала",
                },
                {
                    "pitch": 2,
                    "yaw": 270,
                    "type": "info",
                    "text": "Тематические выставки",
                },
                {
                    "pitch": 350,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Зал",
                    "sceneId": "hall"
                }
            ]
        },
        "hall": {
            "type": "equirectangular",
            "panorama": "../img/reading-hall/3.webp",
            "hotSpots": [
                {
                    "pitch": -12,
                    "yaw": 224,
                    "type": "scene",
                    "text": "Холл",
                    "sceneId": "reception"
                },
                {
                    "pitch": -12,
                    "yaw": 46,
                    "type": "scene",
                    "text": "Центр",
                    "sceneId": "hall_center"
                },
                {
                    "pitch": 4,
                    "yaw": 248,
                    "type": "info",
                    "text": "Фонд периодических изданий",
                },
                {
                    "pitch": -2,
                    "yaw": 263,
                    "type": "info",
                    "text": "Кафедра обслуживания пользователей",
                },
                {
                    "pitch": 0,
                    "yaw": 128,
                    "type": "info",
                    "text": "Выставка литературных новинок",
                }
            ]
        },
        "hall_center": {
            "type": "equirectangular",
            "panorama": "../img/reading-hall/4." + extesion,
            "yaw": -100,
            "hotSpots": [
                {
                    "pitch": -12,
                    "yaw": 145,
                    "type": "scene",
                    "sceneId": "hall"
                },
                {
                    "pitch": 0,
                    "yaw": 78,
                    "type": "scene",
                    "text": "Читальный зал для преподавателей",
                    "sceneId": "professor_reading_room"
                },
                {
                    "pitch": -2,
                    "yaw": 220,
                    "type": "info",
                    "text": "Доступ к ресурсам сети Интернет",
                },
                {
                    "pitch": -2,
                    "yaw": 235,
                    "type": "info",
                    "text": "Электронный каталог",
                    "URL": "https://catalog.msu.by"
                },
                {
                    "pitch": -2,
                    "yaw": 250,
                    "type": "info",
                    "text": "Электронный архив библиотеки",
                    "URL": "https://library.msu.by/resursy/otsifrovannye-izdaniya"
                },
                {
                    "pitch": 0,
                    "yaw": 294,
                    "type": "info",
                    "text": "Проведение мероприятий в онлайн-формате"
                },
                {
                    "pitch": 4,
                    "yaw": 60,
                    "type": "info",
                    "text": "Фотовыставки. Экскурсии. Презентации"
                }
            ]
        },
        "professor_reading_room": {
            "type": "equirectangular",
            "panorama": "../img/reading-hall/5." + extesion,
            "yaw": 70,
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 118,
                    "type": "scene",
                    "text": "Читальный зал",
                    "sceneId": "hall_center"
                },
                {
                    "pitch": 0,
                    "yaw": 95,
                    "type": "info",
                    "text": "Выставка работ преподавателей"
                },
                {
                    "pitch": -6,
                    "yaw": 54,
                    "type": "info",
                    "text": "Доступ к ресурсам сети Интернет"
                },
                {
                    "pitch": 0,
                    "yaw": 180,
                    "type": "info",
                    "text": "Поддержка публикационной активности преподавателей в web-рейтингах",
                    "URL": "https://www.elibrary.ru/authors.asp"
                }
            ]
        }
    }
});