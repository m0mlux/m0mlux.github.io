document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const nav = document.querySelector("nav")

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
      nav.classList.toggle("active")
    })
  }

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle-checkbox")
  const body = document.body

  if (themeToggle) {
    themeToggle.addEventListener("change", () => {
      if (themeToggle.checked) {
        body.classList.remove("light-theme")
        body.classList.add("dark-theme")
        localStorage.setItem("theme", "dark")
      } else {
        body.classList.remove("dark-theme")
        body.classList.add("light-theme")
        localStorage.setItem("theme", "light")
      }
    })

    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "light") {
      themeToggle.checked = false
      body.classList.remove("dark-theme")
      body.classList.add("light-theme")
    }
  }

  // Language selector
  const languageOptions = document.querySelectorAll(".language-options span")

  languageOptions.forEach((option) => {
    option.addEventListener("click", () => {
      languageOptions.forEach((opt) => opt.classList.remove("active"))
      option.classList.add("active")
      localStorage.setItem("language", option.dataset.lang)
      // Here you would typically handle language change
      // For now, we'll just save the preference
    })
  })

  // Check for saved language preference
  const savedLanguage = localStorage.getItem("language")
  if (savedLanguage) {
    languageOptions.forEach((option) => {
      if (option.dataset.lang === savedLanguage) {
        option.classList.add("active")
      } else {
        option.classList.remove("active")
      }
    })
  }

  // Skills slider navigation
  const skillsSlider = document.querySelector(".skills-slider")
  const prevBtn = document.querySelector(".slider-prev")
  const nextBtn = document.querySelector(".slider-next")

  if (skillsSlider && prevBtn && nextBtn) {
    const cardWidth = 280 + 24 // card width + gap

    prevBtn.addEventListener("click", () => {
      skillsSlider.scrollBy({
        left: -cardWidth * 2,
        behavior: "smooth",
      })
    })

    nextBtn.addEventListener("click", () => {
      skillsSlider.scrollBy({
        left: cardWidth * 2,
        behavior: "smooth",
      })
    })
  }

  // Project filtering
  const filterBtns = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")
  const projectSearch = document.getElementById("project-search")

  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Remove active class from all buttons
        filterBtns.forEach((b) => b.classList.remove("active"))
        // Add active class to clicked button
        btn.classList.add("active")

        const filter = btn.dataset.filter

        projectCards.forEach((card) => {
          if (filter === "all" || card.dataset.category === filter) {
            card.style.display = "block"
          } else {
            card.style.display = "none"
          }
        })
      })
    })
  }

  if (projectSearch) {
    projectSearch.addEventListener("input", () => {
      const searchTerm = projectSearch.value.toLowerCase()

      projectCards.forEach((card) => {
        const title = card.querySelector("h3").textContent.toLowerCase()
        const description = card.querySelector("p").textContent.toLowerCase()

        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  }

  // Shop category selection
  const categoryCards = document.querySelectorAll(".category-card")

  if (categoryCards.length) {
    categoryCards.forEach((card) => {
      card.addEventListener("click", () => {
        categoryCards.forEach((c) => c.classList.remove("active"))
        card.classList.add("active")
        // Here you would typically filter products by category
      })
    })
  }

  // FAQ accordion
  const faqItems = document.querySelectorAll(".faq-item")

  if (faqItems.length) {
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question")

      question.addEventListener("click", () => {
        // Close all other items
        faqItems.forEach((i) => {
          if (i !== item) {
            i.classList.remove("active")
          }
        })

        // Toggle current item
        item.classList.toggle("active")
      })
    })
  }

  // Contact form submission
  const contactForm = document.querySelector(".contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject")?.value || ""
      const message = document.getElementById("message").value

      // Here you would typically send the form data to a server
      console.log("Form submitted:", { name, email, subject, message })

      // Reset form
      contactForm.reset()

      // Show success message (you can replace this with a proper UI notification)
      alert("Message sent successfully!")
    })
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href")

      if (targetId === "#") return

      e.preventDefault()

      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })
})
