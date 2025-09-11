/* data.js - shared static dataset for demo purposes */
const students = {
  1: {
    id: 1,
    name: "James Mwangi",
    initials: "JM",
    institution: "University of Nairobi",
    year: "3rd Year",
    phone: "+254700111222",
    skills: ["Delivery", "Customer Service"],
    credits: [
      { text: "Delivered parcel to CBD", date: "2025-08-05" },
      { text: "Assisted in catering event", date: "2025-07-18" }
    ]
  },
  2: {
    id: 2,
    name: "Alice Moru",
    initials: "AM",
    institution: "Kenyatta University",
    year: "2nd Year",
    phone: "+254700333444",
    skills: ["Data Entry", "Typing"],
    credits: [
      { text: "Completed Data Entry Task", date: "2025-07-28" },
      { text: "Filed office records", date: "2025-06-10" }
    ]
  },
  3: {
    id: 3,
    name: "Kevin Otieno",
    initials: "KO",
    institution: "Moi University",
    year: "4th Year",
    phone: "+254700555666",
    skills: ["Tutoring", "Mathematics"],
    credits: [
      { text: "Tutored 5 students in Mathematics", date: "2025-08-01" },
      { text: "Organized revision group", date: "2025-05-20" }
    ]
  }
};

/* Optional: seed jobs if none exist (demo jobs) */
(function seedJobs(){
  try{
    const existing = JSON.parse(localStorage.getItem("jobs") || "null");
    if(!existing || existing.length === 0){
      const demo = [
        { title: "Delivery Rider", company: "QuickDeliver Ltd", county: "Nairobi", institution: "", description: "Deliver parcels in CBD.", postedAt: Date.now() - (1000*60*60*24*2) },
        { title: "Hospitality Support", company: "EventWave", county: "Nairobi", institution: "", description: "Weekend event support.", postedAt: Date.now() - (1000*60*60*5) },
        { title: "Data Entry Clerk", company: "DataWorks", county: "Mombasa", institution: "Kenyatta University", description: "Short term data task.", postedAt: Date.now() - (1000*60*10) }
      ];
      localStorage.setItem("jobs", JSON.stringify(demo));
    }
  }catch(e){
    console.warn("Could not seed jobs:", e);
  }
})();
