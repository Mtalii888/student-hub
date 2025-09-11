self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("students-hub-v1").then(cache => {
      return cache.addAll([
        "index.html",
        "jobs.html",
        "students.html",
        "credits.html",
        "student-profile.html",
        "style.css",
        "data.js"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
