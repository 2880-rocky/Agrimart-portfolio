const skills = [
    { category: "Agri-Tech", items: ["Drone Mapping", "IoT Sensors", "Smart Irrigation"] },
    { category: "Leadership", items: ["Strategic Planning", "Team Management", "Agri-Business MBA"] },
    { category: "Engineering", items: ["Precision Machinery", "Automation", "System Design"] }
];

const skillsContainer = document.getElementById('skills-container');

skills.forEach(skillGroup => {
    // Create the card
    const card = document.createElement('div');
    card.className = 'skill-card';

    // Add the category title
    const title = document.createElement('h4');
    title.textContent = skillGroup.category;
    card.appendChild(title);

    // Add each skill item
    skillGroup.items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'skill-item';
        itemDiv.innerHTML = `<span class="dot"></span>${item}`;
        card.appendChild(itemDiv);
    });

    skillsContainer.appendChild(card);
});