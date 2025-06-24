document.addEventListener('DOMContentLoaded', () => {

    // --- PASTE YOUR FIREBASE CONFIGURATION HERE ---
    const firebaseConfig = {
        apiKey: "AIzaSyAnjWWep4dtxvn1YKtmdU7A002X2NAvlX0",
        authDomain: "data-science-ef878.firebaseapp.com",
        databaseURL: "https://data-science-ef878-default-rtdb.firebaseio.com",
        projectId: "data-science-ef878",
        storageBucket: "data-science-ef878.firebasestorage.app",
        messagingSenderId: "1010841233830",
        appId: "1:1010841233830:web:e7aa0b516ace71c1720767",
        measurementId: "G-FL7XZR6X7Q"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    const checklistData = [
        {
            topic: "Electric Charge",
            subtopics: [
                { id: "charge_friction", name: "Charging by Friction", description: "When two bodies are rubbed together, electrons are transferred from one body to another. The body that loses electrons becomes positively charged, and the one that gains electrons becomes negatively charged. Example: Rubbing a glass rod with silk cloth." },
                { id: "charge_properties", name: "Properties of Charge", description: "1. **Additivity:** Charges add up like real numbers. <br>2. **Conservation:** The total charge of an isolated system remains constant. <br>3. **Quantization:** Charge exists in discrete packets. Any charge \\(q\\) is an integral multiple of the elementary charge \\(e\\). <br> \\( q = ne \\), where \\(n\\) is an integer and \\( e = 1.602 \\times 10^{-19} \\) C." },
                { id: "gold_leaf", name: "Gold-Leaf Electroscope", description: "A device for detecting electric charge. It consists of a metal rod with two thin gold leaves at the end. When a charged object touches the metal knob, charge is transferred to the leaves, which then repel each other and diverge." }
            ]
        },
        {
            topic: "Conductors & Insulators",
            subtopics: [
                { id: "cond_ins_def", name: "Definitions & Examples", description: "<b>Conductors</b> are materials that allow electric charge (electrons) to flow freely through them. Examples: Metals (copper, silver), human body. <br><b>Insulators</b> (or dielectrics) are materials that resist the flow of electric charge. Examples: Glass, plastic, wood." },
                { id: "charge_dist", name: "Charge Distribution", description: "In conductors, excess charge resides on the surface. In insulators, charge remains localized where it was placed. For a conductor, charge density is higher at sharp points." }
            ]
        },
        {
            topic: "Coulomb's Law",
            subtopics: [
                { id: "coulomb_def", name: "Definition", description: "The electrostatic force between two point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them. <br> \\[ F = k \\frac{|q_1 q_2|}{r^2} \\]" },
                { id: "coulomb_k_e0", name: "Value of k and ε₀", description: "The constant \\(k\\) is Coulomb's constant, \\( k = \\frac{1}{4 \\pi \\varepsilon_0} \\approx 9 \\times 10^9 \\) N m²/C². <br> \\(\\varepsilon_0\\) is the permittivity of free space, \\(\\varepsilon_0 \\approx 8.854 \\times 10^{-12} \\) C²/N m²." },
                { id: "coulomb_vector", name: "Vector Form", description: "The force on charge \\(q_2\\) due to \\(q_1\\) is: <br> \\[ \\vec{F}_{21} = \\frac{1}{4 \\pi \\varepsilon_0} \\frac{q_1 q_2}{r_{21}^2} \\hat{r}_{21} \\] where \\(\\hat{r}_{21}\\) is the unit vector from \\(q_1\\) to \\(q_2\\)." }
            ]
        },
        {
            topic: "Electric Field",
            subtopics: [
                { id: "efield_def", name: "Definition & Equation", description: "The electric field \\(\\vec{E}\\) at a point is the electrostatic force \\(\\vec{F}\\) experienced by a small positive test charge \\(q_0\\) placed at that point, divided by the magnitude of the test charge. <br> \\[ \\vec{E} = \\lim_{q_0 \\to 0} \\frac{\\vec{F}}{q_0} \\] The unit is N/C." },
                { id: "efield_superposition", name: "Superposition Principle", description: "The total electric field at a point due to a group of charges is the vector sum of the electric fields produced by each individual charge. <br> \\[ \\vec{E}_{total} = \\vec{E}_1 + \\vec{E}_2 + \\vec{E}_3 + ... \\]" },
                { id: "efield_lines", name: "Electric Field Lines", description: "An electric field line is a curve drawn in such a way that the tangent to it at each point is in the direction of the net electric field at that point. <br> - They start from positive charges and end at negative charges. <br> - They never cross each other. <br> - The density of lines indicates the strength of the field." }
            ]
        },
        {
            topic: "Electric Dipole",
            subtopics: [
                { id: "dipole_def", name: "Dipole Moment", description: "An electric dipole is a pair of equal and opposite point charges separated by a small distance. The dipole moment \\(\\vec{p}\\) is a vector quantity with magnitude equal to the product of either charge and the distance between them. Its direction is from the negative to the positive charge. <br> \\[ \\vec{p} = q(2\\vec{a}) \\]" },
                { id: "dipole_field_axial", name: "Field on Axial Line", description: "The electric field at a point on the axis of a dipole at a distance \\(r\\) from the center is: <br> \\[ \\vec{E}_{axial} = \\frac{1}{4 \\pi \\varepsilon_0} \\frac{2\\vec{p}}{r^3} \\]" },
                { id: "dipole_torque", name: "Torque on a Dipole", description: "When a dipole is placed in a uniform external electric field \\(\\vec{E}\\), it experiences a torque \\(\\vec{\\tau}\\). <br> \\[ \\vec{\\tau} = \\vec{p} \\times \\vec{E} \\] The magnitude is \\(\\tau = pE \\sin\\theta\\)." }
            ]
        },
        {
            topic: "Gauss's Law",
            subtopics: [
                { id: "electric_flux", name: "Electric Flux", description: "Electric flux \\(\\Phi_E\\) through a surface is a measure of the total number of electric field lines passing through it. For a uniform field \\(\\vec{E}\\) and a plane area \\(\\Delta \\vec{S}\\), flux is: <br> \\[ \\Delta\\Phi_E = \\vec{E} \\cdot \\Delta\\vec{S} = E \\Delta S \\cos\\theta \\] The total flux through a closed surface is \\( \\Phi_E = \\oint \\vec{E} \\cdot d\\vec{S} \\)." },
                { id: "gauss_law_def", name: "Gauss's Law", description: "Gauss's Law states that the total electric flux through any closed surface (a Gaussian surface) is \\(1/\\varepsilon_0\\) times the net charge enclosed by the surface. <br> \\[ \\Phi_E = \\oint \\vec{E} \\cdot d\\vec{S} = \\frac{q_{enc}}{\\varepsilon_0} \\]" },
                { id: "gauss_app_wire", name: "Application: Infinite Wire", description: "The electric field due to an infinitely long straight uniformly charged wire with linear charge density \\(\\lambda\\) at a distance \\(r\\) is: <br> \\[ E = \\frac{\\lambda}{2 \\pi \\varepsilon_0 r} \\]" },
                { id: "gauss_app_shell", name: "Application: Spherical Shell", description: "For a uniformly charged spherical shell of radius \\(R\\) and total charge \\(Q\\): <br> <b>Outside (r > R):</b> \\( E = \\frac{1}{4 \\pi \\varepsilon_0} \\frac{Q}{r^2} \\) <br> <b>Inside (r < R):</b> \\( E = 0 \\) <br> <b>On surface (r = R):</b> \\( E = \\frac{1}{4 \\pi \\varepsilon_0} \\frac{Q}{R^2} \\)" }
            ]
        }
    ];

    const container = document.getElementById('checklist-container');
    const modal = document.getElementById('description-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeModalBtn = document.getElementById('close-modal-btn');

    let userId = getOrSetUserId();

    function getOrSetUserId() {
        let id = localStorage.getItem('physicsAppUserId');
        if (!id) {
            id = 'user_' + Date.now() + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('physicsAppUserId', id);
        }
        return id;
    }

    function generateChecklist() {
        let html = '';
        checklistData.forEach(topic => {
            html += `<div class="topic-card">
                        <h2 class="topic-title">${topic.topic}</h2>`;
            topic.subtopics.forEach(subtopic => {
                html += `<div class="subtopic-item" id="${subtopic.id}">
                            <span class="subtopic-name">${subtopic.name}</span>
                            <div class="subtopic-controls">
                                <button class="details-btn" data-id="${subtopic.id}">ⓘ</button>
                                <div class="priority-buttons" data-id="${subtopic.id}">
                                    <button class="priority-btn confident" data-priority="confident">Confident</button>
                                    <button class="priority-btn revising" data-priority="revising">Revising</button>
                                    <button class="priority-btn learning" data-priority="learning">Learning</button>
                                </div>
                            </div>
                         </div>`;
            });
            html += `</div>`;
        });
        container.innerHTML = html;
        addEventListeners();
        loadUserProgress();
    }

    function addEventListeners() {
        document.querySelectorAll('.priority-btn').forEach(btn => {
            btn.addEventListener('click', handlePriorityClick);
        });
        document.querySelectorAll('.details-btn').forEach(btn => {
            btn.addEventListener('click', showDescriptionModal);
        });
    }

    function handlePriorityClick(event) {
        const button = event.target;
        const priority = button.dataset.priority;
        const subtopicId = button.parentElement.dataset.id;

        // Update UI
        const buttonGroup = button.parentElement.querySelectorAll('.priority-btn');
        buttonGroup.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Save to Firebase
        database.ref(`collect/${userId}/${subtopicId}`).set(priority)
            .catch(error => console.error("Firebase write failed: ", error));
    }

    function showDescriptionModal(event) {
        const subtopicId = event.target.dataset.id;
        let subtopic;
        for (const topic of checklistData) {
            const found = topic.subtopics.find(st => st.id === subtopicId);
            if (found) {
                subtopic = found;
                break;
            }
        }

        if (subtopic) {
            modalTitle.textContent = subtopic.name;
            modalDescription.innerHTML = subtopic.description;
            modal.style.display = 'flex';
            // Re-render MathJax content
            MathJax.typesetPromise([modalDescription]);
        }
    }

    function hideModal() {
        modal.style.display = 'none';
    }

    function loadUserProgress() {
        const userRef = database.ref(`collect/${userId}`);
        userRef.once('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                Object.keys(data).forEach(subtopicId => {
                    const priority = data[subtopicId];
                    const button = document.querySelector(`.priority-buttons[data-id="${subtopicId}"] .priority-btn[data-priority="${priority}"]`);
                    if (button) {
                        button.classList.add('active');
                    }
                });
            }
        });
    }

    closeModalBtn.addEventListener('click', hideModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });

    // Initial load
    generateChecklist();
});