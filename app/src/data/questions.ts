export const questions = [
    // Sección General
    {
        id: 1,
        category: 'general',
        question: '¿Cuanto tiempo lleva su empresa en el mercado?',
        options: [
            { text: 'Menos de 1 año', weight: 1 },
            { text: '1 a 5 años', weight: 2 },
            { text: '5 a 10 años', weight: 3 },
            { text: '10 a 20 años', weight: 4 },
            { text: 'Más de 20 años', weight: 5 }
        ]
    },
    {
        id: 2,
        category: 'general',
        question: '¿Cuantos empleados tiene su empresa?',
        options: [
            { text: '1 a 10 empleados', weight: 1 },
            { text: '11 a 50 empleados', weight: 2 },
            { text: '51 a 100 empleados', weight: 3 },
            { text: '101 a 500 empleados', weight: 4 },
            { text: 'Más de 500 empleados', weight: 5 }
        ]
    },

    // Sección Robotización
    {
        id: 3,
        category: 'robotizacion',
        question: '¿Cuentan con un plan de automatización y robotización en su empresa?',
        options: [
            { text: 'Si', weight: 2 },
            { text: 'No', weight: 0 }
        ]
    },
    {
        id: 4,
        category: 'robotizacion',
        question: '¿Cuentan con un área de automatización y robotización en su empresa?',
        options: [
            { text: 'Si', weight: 2 },
            { text: 'No', weight: 0 }
        ]
    },

    // Sección Digitalización
    {
        id: 5,
        category: 'digitalizacion',
        question: '¿Cuentan con un área de innovación en su empresa?',
        options: [
            { text: 'Si', weight: 2 },
            { text: 'No', weight: 0 }
        ]
    },
    {
        id: 6,
        category: 'digitalizacion',
        question: '¿Cuentan con un área de tecnología en su empresa?',
        options: [
            { text: 'Si', weight: 2 },
            { text: 'No', weight: 0 }
        ]
    },
    {
        id: 7,
        category: 'digitalizacion',
        question: '¿Cuentan con un área de transformación digital en su empresa?',
        options: [
            { text: 'Si', weight: 2 },
            { text: 'No', weight: 0 }
        ]
    },

    // Sección Disponibilidad (Recursos)
    {
        id: 8,
        category: 'disponibilidad',
        question: '¿Cual es el nivel de ingresos de su empresa?',
        options: [
            { text: 'Menos de 1 millón de euros', weight: 1 },
            { text: '1 a 5 millones de euros', weight: 2 },
            { text: '5 a 10 millones de euros', weight: 3 },
            { text: '10 a 50 millones de euros', weight: 4 },
            { text: '50 a 100 millones de euros', weight: 5 },
            { text: 'Más de 100 millones de euros', weight: 6 }
        ]
    },
    {
        id: 9,
        category: 'disponibilidad',
        question: '¿Cual es el nivel de egresos de su empresa?',
        options: [
            { text: 'Menos de 1 millón de euros', weight: 1 },
            { text: '1 a 5 millones de euros', weight: 2 },
            { text: '5 a 10 millones de euros', weight: 3 },
            { text: '10 a 50 millones de euros', weight: 4 },
            { text: '50 a 100 millones de euros', weight: 5 },
            { text: 'Más de 100 millones de euros', weight: 6 }
        ]
    },
    {
        id: 10,
        category: 'disponibilidad',
        question: '¿Cual es el nivel de activos de su empresa?',
        options: [
            { text: 'Menos de 1 millón de euros', weight: 1 },
            { text: '1 a 5 millones de euros', weight: 2 },
            { text: '5 a 10 millones de euros', weight: 3 },
            { text: '10 a 50 millones de euros', weight: 4 },
            { text: '50 a 100 millones de euros', weight: 5 },
            { text: 'Más de 100 millones de euros', weight: 6 }
        ]
    },
];

export const primarioQuestions = [
    {
        id: 1,
        question: '¿Utilizan sistemas automatizados para el control del riego?',
        options: [
            { text: 'Si', weight: 3 },
            { text: 'No', weight: 0 }
        ]
    },
    {
        id: 2,
        question: '¿Implementan tecnologías de monitoreo remoto (drones, satélites) para optimizar la producción?',
        options: [
            { text: 'Si', weight: 3 },
            { text: 'No', weight: 0 }
        ]
    },
    {
        id: 3,
        question: '¿Cuentan con sensores para monitorear la humedad del suelo, calidad del aire, o temperatura?',
        options: [
            { text: 'Si', weight: 2 },
            { text: 'No', weight: 0 }
        ]
    },
    {
        id: 4,
        question: '¿Qué porcentaje de sus cultivos o procesos está automatizado?',
        options: [
            { text: 'Menos del 10%', weight: 1 },
            { text: 'Entre el 10% y el 30%', weight: 2 },
            { text: 'Entre el 30% y el 50%', weight: 3 },
            { text: 'Más del 50%', weight: 4 }
        ]
    },
    {
        id: 5,
        question: '¿Utilizan robots en actividades de cosecha o producción?',
        options: [
            { text: 'Si', weight: 4 },
            { text: 'No', weight: 0 }
        ]
    }
];

export const secundarioQuestions = [
    {
        id: 1,
        question: '¿Qué porcentaje de su cadena de producción está automatizado?',
        options: [
            { text: 'Menos del 10%', weight: 1 },
            { text: 'Entre el 10% y el 30%', weight: 2 },
            { text: 'Entre el 30% y el 50%', weight: 3 },
            { text: 'Más del 50%', weight: 4 }
        ]
    },
    {
        id: 2,
        question: '¿Utilizan software de control y monitoreo de maquinaria (SCADA)?',
        options: [
            { text: 'Si', weight: 3 },
            { text: 'No', weight: 0 }
        ]
    },
    {
        id: 3,
        question: '¿Utilizan robots industriales en la cadena de producción?',
        options: [
            { text: 'Si', weight: 4 },
            { text: 'No', weight: 0 }
        ]
    },
    {
        id: 4,
        question: '¿Cuentan con sistemas de mantenimiento predictivo para maquinaria?',
        options: [
            { text: 'Si', weight: 3 },
            { text: 'No', weight: 0 }
        ]
    },
    {
        id: 5,
        question: '¿Implementan tecnología de impresión 3D en su proceso productivo?',
        options: [
            { text: 'Si', weight: 2 },
            { text: 'No', weight: 0 }
        ]
    }
];

export const terciarioQuestions = [
    {
        id: 1,
        question: '¿Qué porcentaje de sus operaciones está digitalizado?',
        options: [
            { text: 'Menos del 10%', weight: 1 },
            { text: 'Entre el 10% y el 30%', weight: 2 },
            { text: 'Entre el 30% y el 50%', weight: 3 },
            { text: 'Más del 50%', weight: 4 }
        ]
    },
    {
        id: 2,
        question: '¿Cuentan con plataformas digitales para gestionar ventas o servicios (e-commerce, CRM, ERP)?',
        options: [
            { text: 'Si', weight: 3 },
            { text: 'No', weight: 0 }
        ]
    },
    {
        id: 3,
        question: '¿Utilizan inteligencia artificial para personalizar servicios o recomendaciones?',
        options: [
            { text: 'Si', weight: 4 },
            { text: 'No', weight: 0 }
        ]
    },
    {
        id: 4,
        question: '¿Cuentan con procesos de automatización de marketing digital?',
        options: [
            { text: 'Si', weight: 3 },
            { text: 'No', weight: 0 }
        ]
    },
    {
        id: 5,
        question: '¿Qué porcentaje de sus interacciones con clientes se realizan a través de canales digitales?',
        options: [
            { text: 'Menos del 10%', weight: 1 },
            { text: 'Entre el 10% y el 30%', weight: 2 },
            { text: 'Entre el 30% y el 50%', weight: 3 },
            { text: 'Más del 50%', weight: 4 }
        ]
    }
];

