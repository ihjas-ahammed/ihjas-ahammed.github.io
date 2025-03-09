// Bus schedules data
const busSchedules = {
    "S.S College": {
        "EDAVANNAPPARA": [
            "06:30 AM", "06:35 AM", "06:40 AM", "06:55 AM", "07:20 AM", "07:40 AM", "07:55 AM",
            "08:10 AM", "08:15 AM", "08:30 AM", "08:40 AM", "08:50 AM", "09:05 AM", "09:25 AM",
            "09:40 AM", "10:05 AM", "10:13 AM", "10:18 AM", "10:40 AM", "10:50 AM", "11:05 AM",
            "11:20 AM", "11:38 AM", "11:55 AM", "12:03 PM", "12:18 PM", "12:30 PM", "12:40 PM",
            "01:08 PM", "01:32 PM", "01:42 PM", "01:50 PM", "01:55 PM", "02:05 PM", "02:15 PM",
            "02:25 PM", "02:48 PM", "03:00 PM", "03:10 PM", "03:25 PM", "03:40 PM", "04:05 PM",
            "04:20 PM", "04:37 PM", "04:50 PM", "04:55 PM", "05:10 PM", "05:22 PM", "05:35 PM",
            "05:45 PM", "05:53 PM", "05:55 PM", "06:03 PM", "06:13 PM", "06:23 PM", "06:35 PM",
            "06:45 PM", "06:58 PM", "07:10 PM", "07:30 PM"
        ],
        "AREEKODE": [
            "07:08 AM", "07:30 AM", "07:45 AM", "07:55 AM", "08:05 AM", "08:22 AM", "08:37 AM",
            "08:52 AM", "09:15 AM", "09:25 AM", "09:37 AM", "09:45 AM", "10:04 AM", "10:22 AM",
            "10:33 AM", "10:37 AM", "10:55 AM", "11:05 AM", "11:22 AM", "11:32 AM", "11:40 AM",
            "12:00 PM", "12:20 PM", "12:30 PM", "12:35 PM", "12:45 PM", "12:52 PM", "01:05 PM",
            "01:13 PM"
        ]
    }
};

// Travel times in milliseconds
const travelTimes = {
    "ss-college-to-edavannappara": 5 * 60 * 1000, // 5 minutes
    "ss-college-to-areekode": 20 * 60 * 1000,     // 20 minutes total
    "edavannappara-to-areekode": 15 * 60 * 1000   // 15 minutes
};

// Helper Functions
function timeStringToDate(timeString) {
    const [time, period] = timeString.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (period === 'PM' && hours < 12) hours += 12;
    else if (period === 'AM' && hours === 12) hours = 0;
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
}

function formatTime(date, includeSeconds = true) {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return includeSeconds ? `${hours}:${minutes}:${seconds} ${period}` : `${hours}:${minutes} ${period}`;
}

function formatCountdown(milliseconds) {
    if (milliseconds < 0) return "Departed";
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / (1000 * 60)) % 60);
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function findNextBuses(schedule, offset = 0) {
    const now = new Date();
    const scheduleDates = schedule.map(time => {
        const date = timeStringToDate(time);
        date.setTime(date.getTime() + offset);
        return date;
    });

    const nextBusIndex = scheduleDates.findIndex(date => date > now);
    if (nextBusIndex === -1) return { nextBus: null, upcomingBuses: [] };

    const upcomingBuses = scheduleDates.slice(nextBusIndex, nextBusIndex + 5).map((date, idx) => ({
        time: date,
        timeString: formatTime(date, false),
        remainingTime: date - now
    }));

    return {
        nextBus: upcomingBuses[0],
        upcomingBuses: upcomingBuses.slice(1)
    };
}

function findPreviousBus(schedule, travelTime) {
    const now = new Date();
    const scheduleDates = schedule.map(time => timeStringToDate(time));
    for (let i = scheduleDates.length - 1; i >= 0; i--) {
        const departureTime = scheduleDates[i];
        const arrivalTime = new Date(departureTime.getTime() + travelTime);
        if (departureTime < now && now <= arrivalTime) {
            return { time: departureTime, timeString: schedule[i] };
        }
    }
    return null;
}

// UI Update Function
function updateUI() {
    const now = new Date();
    document.getElementById('current-time').textContent = `Current Time: ${formatTime(now)}`;
    const location = document.getElementById('current-location').value;
    const trackStatus = document.getElementById('track-status');
    const trackProgress = document.getElementById('track-progress');

    // Edavannappara Card
    const edavNextTime = document.getElementById('edavannappara-next-time');
    const edavCountdown = document.getElementById('edavannappara-countdown');
    const edavUpcoming = document.getElementById('edavannappara-upcoming');
    const edavSchedule = busSchedules["S.S College"]["EDAVANNAPPARA"];

    // Areekode Card
    const areekNextTime = document.getElementById('areekode-next-time');
    const areekCountdown = document.getElementById('areekode-countdown');
    const areekUpcoming = document.getElementById('areekode-upcoming');
    const areekSchedule = busSchedules["S.S College"]["AREEKODE"];

    if (location === "ss-college") {
        const edavBuses = findNextBuses(edavSchedule);
        if (edavBuses.nextBus) {
            edavNextTime.textContent = edavBuses.nextBus.timeString;
            edavCountdown.textContent = formatCountdown(edavBuses.nextBus.remainingTime);
            edavUpcoming.innerHTML = edavBuses.upcomingBuses.map(bus => `
              <li>
                <span class="status-indicator ${bus.remainingTime < 1800000 ? 'status-soon' : 'status-upcoming'}"></span>
                <span class="time">${bus.timeString}</span>
                <span class="remaining">in ${formatCountdown(bus.remainingTime)}</span>
              </li>
            `).join('');
        } else {
            edavNextTime.textContent = "No more buses today";
            edavCountdown.textContent = "--:--:--";
            edavUpcoming.innerHTML = '<li>All buses have departed</li>';
        }

        const areekBuses = findNextBuses(areekSchedule);
        if (areekBuses.nextBus) {
            areekNextTime.textContent = areekBuses.nextBus.timeString;
            areekCountdown.textContent = formatCountdown(areekBuses.nextBus.remainingTime);
            areekUpcoming.innerHTML = areekBuses.upcomingBuses.map(bus => `
              <li>
                <span class="status-indicator ${bus.remainingTime < 1800000 ? 'status-soon' : 'status-upcoming'}"></span>
                <span class="time">${bus.timeString}</span>
                <span class="remaining">in ${formatCountdown(bus.remainingTime)}</span>
              </li>
            `).join('');
        } else {
            areekNextTime.textContent = "No more buses today";
            areekCountdown.textContent = "--:--:--";
            areekUpcoming.innerHTML = '<li>All buses have departed</li>';
        }
    } else if (location === "edavannappara") {
        const edavArrival = findNextBuses(edavSchedule, travelTimes["ss-college-to-edavannappara"]);
        edavNextTime.textContent = edavArrival.nextBus ? `Arrives at ${edavArrival.nextBus.timeString}` : "No more buses today";
        edavCountdown.textContent = edavArrival.nextBus ? formatCountdown(edavArrival.nextBus.remainingTime) : "--:--:--";
        edavUpcoming.innerHTML = edavArrival.nextBus ? edavArrival.upcomingBuses.map(bus => `
            <li>
              <span class="status-indicator ${bus.remainingTime < 1800000 ? 'status-soon' : 'status-upcoming'}"></span>
              <span class="time">${bus.timeString}</span>
              <span class="remaining">in ${formatCountdown(bus.remainingTime)}</span>
            </li>
          `).join('') : '<li>All buses have arrived</li>';

        const areekPass = findNextBuses(areekSchedule, travelTimes["ss-college-to-edavannappara"]);
        areekNextTime.textContent = areekPass.nextBus ? `Departs at ${areekPass.nextBus.timeString}` : "No more buses today";
        areekCountdown.textContent = areekPass.nextBus ? formatCountdown(areekPass.nextBus.remainingTime) : "--:--:--";
        areekUpcoming.innerHTML = areekPass.nextBus ? areekPass.upcomingBuses.map(bus => `
            <li>
              <span class="status-indicator ${bus.remainingTime < 1800000 ? 'status-soon' : 'status-upcoming'}"></span>
              <span class="time">${bus.timeString}</span>
              <span class="remaining">in ${formatCountdown(bus.remainingTime)}</span>
            </li>
          `).join('') : '<li>All buses have passed</li>';
    } else if (location === "areekode") {
        edavNextTime.textContent = "No direct buses from Areekode";
        edavCountdown.textContent = "--:--:--";
        edavUpcoming.innerHTML = '<li>Select another location</li>';

        const areekArrival = findNextBuses(areekSchedule, travelTimes["ss-college-to-areekode"]);
        areekNextTime.textContent = areekArrival.nextBus ? `Arrives at ${areekArrival.nextBus.timeString}` : "No more buses today";
        areekCountdown.textContent = areekArrival.nextBus ? formatCountdown(areekArrival.nextBus.remainingTime) : "--:--:--";
        areekUpcoming.innerHTML = areekArrival.nextBus ? areekArrival.upcomingBuses.map(bus => `
            <li>
              <span class="status-indicator ${bus.remainingTime < 1800000 ? 'status-soon' : 'status-upcoming'}"></span>
              <span class="time">${bus.timeString}</span>
              <span class="remaining">in ${formatCountdown(bus.remainingTime)}</span>
            </li>
          `).join('') : '<li>All buses have arrived</li>';
    }

    // Tracking Progress
    if (location.startsWith("on-bus-")) {
        showTrack()
        setActiveTab("track-bus")
        const dest = location.split("on-bus-")[1];
        const travelTime = dest === "edavannappara" ? travelTimes["ss-college-to-edavannappara"] : travelTimes["ss-college-to-areekode"];
        const schedule = busSchedules["S.S College"][dest.toUpperCase()];
        const prevBus = findPreviousBus(schedule, travelTime);

        if (prevBus) {
            const departureTime = prevBus.time;
            const arrivalTime = new Date(departureTime.getTime() + travelTime);
            const timeSinceDeparture = now - departureTime;
            const progress = (timeSinceDeparture / travelTime) * 100;
            const timeLeft = travelTime - timeSinceDeparture;
            const color = dest === "edavannappara" ? 'var(--primary)' : 'var(--secondary)';

            trackStatus.innerHTML = `
              Departed at ${formatTime(prevBus.time, false)}, arriving at ${formatTime(arrivalTime, false)}, 
              time left: ${formatCountdown(timeLeft)}
            `;
            trackProgress.innerHTML = `
              <div style="width: 100%; background-color: #eee; border-radius: 5px; height: 20px;">
                <div style="width: ${progress}%; background-color: ${color}; height: 100%; border-radius: 5px;"></div>
              </div>
            `;
        } else {
            trackStatus.innerHTML = "No bus currently en route to " + dest.charAt(0).toUpperCase() + dest.slice(1);
            trackProgress.innerHTML = "";
        }
    } else {
        trackStatus.innerHTML = "";

        trackProgress.innerHTML = "";
        hideTrack()

        if(location.toUpperCase().indexOf("ARA") != -1) setActiveTab("edavannappara")
        else if (location.toUpperCase().indexOf("COLL") == -1) setActiveTab("areekode")
        else return
    }
}


const tabs = document.querySelectorAll('.nav-tab');
const cards = document.querySelectorAll('.card');
function setActiveTab(target) {
    tabs.forEach(tab => tab.classList.toggle('active', tab.dataset.target === target));
    cards.forEach(card => card.classList.toggle('active', card.classList.contains(target)));
}

// Mobile Tabs
function initMobileTabs() {

    tabs.forEach(tab => tab.addEventListener('click', () => setActiveTab(tab.dataset.target)));
    setActiveTab('edavannappara');
}

// Pull to Refresh


// Dark Mode
function initDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });
}

// Refresh Button
function initRefreshButton() {
    const refreshButton = document.getElementById('refresh-button');
    refreshButton.addEventListener('click', () => {
        refreshButton.style.transform = 'rotate(360deg)';
        setTimeout(() => refreshButton.style.transform = 'none', 300);
        updateUI();
    });
}

// Initialization
function init() {
    updateUI();
    initMobileTabs();
    initDarkMode();
    initRefreshButton();

    setInterval(updateUI, 1000);
    hideTrack()

    document.getElementById('current-location').addEventListener('change', updateUI);
}

function hideTrack() {
    document.querySelector('.track-bus').style.display = "none"
    let array = document.querySelectorAll(".location")
    for(let i = 0; i < array.length; i++) {
        const element = array[i];
        element.style.display = "block"
        
    }
}


function showTrack() {
    document.querySelector('.track-bus').style.display = "block"
    let array = document.querySelectorAll(".location")
    for(let i = 0; i < array.length; i++) {
        const element = array[i];
        element.style.display = "none"
        
    }
}

document.addEventListener('DOMContentLoaded', init);
