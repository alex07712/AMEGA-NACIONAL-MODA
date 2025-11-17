// Datos de ejemplo de tus diseños
const designs = [
    {
        id: "BC001",
        name: "Diseño Clásico",
        description: "Bolsa hecha de camisa de algodón azul",
        price: "$40",
        image: "imagen/bolsas-de-tela.jpg"
    },
    {
        id: "BC002", 
        name: "Estampado Floral",
        description: "Camisa floral convertida en bolsa única",
        price: "50",
        image: "imagen/diseño2.jpg"
    },
    {
        id: "BC003",
        name: "Arbol frondoso",
        description: "Estilo retro con rayas características",
        price: "$60", 
        image: "imagen/diseño3.jpg"
    },
    {
        id: "BC004",
        name: "Roja",
        description: "Resistente y con estilo casual",
        price: "$30.000",
        image: ""
    }
];

// Cargar diseños en la página
function loadDesigns() {
    const designsGrid = document.getElementById('designsGrid');
    
    designs.forEach(design => {
        const designCard = `
        <div class="design-card">
             <div class="design-image">
                 <img src="${design.image}" alt="${design.name}" style="width: 100%; height: 100%; object-fit: cover;">
             </div>
             <div class="design-info">
                 <span class="design-code">Código: ${design.id}</span>
                 <h3>${design.name}</h3>
                 <p>${design.description}</p>
                 <p><strong>Precio: ${design.price}</strong></p>
                 <button onclick="contactAboutDesign('${design.id}')" 
                     style="margin-top: 10px; background: #2c5530; color: white; border: none; padding: 8px 15px; border-radius: 5px; cursor: pointer;">
                Me interesa este diseño
            </button>
        </div>
    </div>
`;
        designsGrid.innerHTML += designCard;
    });
}

// Función para contactar sobre un diseño
function contactAboutDesign(designCode) {
    const message = `¡Hola! Me interesa el diseño con código: ${designCode}. ¿Podrían darme más información?`;
    
    // Aquí puedes cambiar el número de WhatsApp
    const phoneNumber = "+529617522184"; // Reemplaza con tu número
    
    // Abrir WhatsApp
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Función para navegar suavemente
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Cargar diseños cuando la página esté lista
document.addEventListener('DOMContentLoaded', loadDesigns);