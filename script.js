// // ================== MOBILE NAVIGATION ==================

// // Select DOM elements
// const hamburger = document.querySelector('.hamburger');
// const sidebar = document.querySelector('.sidebar');
// const overlay = document.querySelector('.overlay');
// const hasSubs = document.querySelectorAll('.sidebar .has-sub > a');
// const allNavLinks = document.querySelectorAll('.sidebar a'); // all links

// // Toggle sidebar
// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('active');
//   sidebar.classList.toggle('show');
//   overlay.classList.toggle('show');
// });

// // Close sidebar on overlay click
// overlay.addEventListener('click', () => {
//   hamburger.classList.remove('active');
//   sidebar.classList.remove('show');
//   overlay.classList.remove('show');
// });

// // Handle nav links
// allNavLinks.forEach(link => {
//   link.addEventListener('click', e => {
//     const parentLi = link.parentElement;

//     if (parentLi.classList.contains('has-sub')) {
//       // ✅ Nav item has submenu → toggle it, close others
//       e.preventDefault();

//       document.querySelectorAll('.sidebar .has-sub.open').forEach(openLi => {
//         if (openLi !== parentLi) openLi.classList.remove('open');
//       });

//       parentLi.classList.toggle('open');
//     } else {
//       // ✅ Nav item without submenu → close sidebar
//       hamburger.classList.remove('active');
//       sidebar.classList.remove('show');
//       overlay.classList.remove('show');
//     }
//   });
// });



// ================== MOBILE NAVIGATION ==================

// Select DOM elements
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const hasSubs = document.querySelectorAll('.sidebar .has-sub > a');
const allNavLinks = document.querySelectorAll('.sidebar a'); // all links

// Function to close sidebar + reset submenus
function closeSidebar() {
  hamburger.classList.remove('active');
  sidebar.classList.remove('show');
  overlay.classList.remove('show');

  // Close all submenus
  document.querySelectorAll('.sidebar .has-sub.open').forEach(openLi => {
    openLi.classList.remove('open');
  });
}

// Toggle sidebar
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  sidebar.classList.toggle('show');
  overlay.classList.toggle('show');
});

// Close sidebar on overlay click
overlay.addEventListener('click', () => {
  closeSidebar();
});

// Handle nav links (mobile)
allNavLinks.forEach(link => {
  link.addEventListener('click', e => {
    const parentLi = link.parentElement;

    if (parentLi.classList.contains('has-sub')) {
      // ✅ Has submenu → toggle this one, close others
      e.preventDefault();

      document.querySelectorAll('.sidebar .has-sub.open').forEach(openLi => {
        if (openLi !== parentLi) openLi.classList.remove('open');
      });

      parentLi.classList.toggle('open');
    } else {
      // ✅ Normal link → close sidebar
      closeSidebar();
    }
  });
});

// ================== DESKTOP NAVIGATION (Mega Menu) ==================

// Select all top-level nav items
const desktopItems = document.querySelectorAll('.nav-links > li');

desktopItems.forEach(item => {
  const hasMega = item.querySelector('.mega-menu');
  const link = item.querySelector('a');

  if (hasMega) {
    // Hover to open
    item.addEventListener('mouseenter', () => {
      // Close all others
      desktopItems.forEach(i => { if (i !== item) i.classList.remove('open'); });
      item.classList.add('open');
    });

    item.addEventListener('mouseleave', () => {
      item.classList.remove('open');
    });

    // Click to toggle (optional for touch devices)
    link.addEventListener('click', e => {
      e.preventDefault();
      item.classList.toggle('open');
    });
  } else {
    // If no mega menu → close all open mega menus on click
    link.addEventListener('click', () => {
      desktopItems.forEach(i => i.classList.remove('open'));
    });
  }
});

// Close mega menu if clicked outside
document.addEventListener('click', e => {
  if (!e.target.closest('.nav-links')) {
    desktopItems.forEach(i => i.classList.remove('open'));
  }
});
