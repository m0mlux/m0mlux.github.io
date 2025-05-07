document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        })

        // Update active link
        document.querySelectorAll("nav a").forEach((link) => {
          link.classList.remove("active")
        })
        this.classList.add("active")
      }
    })
  })

  // Scroll spy for navigation
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY

    document.querySelectorAll("section").forEach((section) => {
      const sectionTop = section.offsetTop - 100
      const sectionHeight = section.offsetHeight
      const sectionId = section.getAttribute("id")

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll("nav a").forEach((link) => {
          link.classList.remove("active")
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active")
          }
        })
      }
    })

    // Header background change on scroll
    const header = document.querySelector("header")
    if (scrollPosition > 50) {
      header.style.backgroundColor = "rgba(5, 5, 5, 0.95)"
      header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)"
    } else {
      header.style.backgroundColor = "rgba(5, 5, 5, 0.8)"
      header.style.boxShadow = "none"
    }
  })

  // Form submission
  const contactForm = document.querySelector(".contact-form form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value

      // Here you would typically send the form data to a server
      console.log("Form submitted:", { name, email, message })

      // Reset form
      contactForm.reset()

      // Show success message (you can replace this with a proper UI notification)
      alert("Message sent successfully!")
    })
  }

  // Animation for skill cards
  const skillCards = document.querySelectorAll(".skill-card")
  if (skillCards.length) {
    skillCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`
      card.classList.add("animate-in")
    })
  }

  // Add animation class to elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".project-card, .about-content > div, .contact-content > div")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementPosition < windowHeight - 100) {
        element.classList.add("animate-in")
      }
    })
  }

  // Run animation check on load and scroll
  animateOnScroll()
  window.addEventListener("scroll", animateOnScroll)
})
