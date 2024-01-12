export const animateOnScroll = (animationClassName) => {
  const startAnimation = (entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle(animationClassName, entry.isIntersecting)
    })
  }

  const options = { root: null, rootMargin: '80px' }
  const observer = new IntersectionObserver(startAnimation, options)

  const observeElements = () => {
    const elements = document.querySelectorAll('.' + animationClassName)
    elements.forEach(el => {
      observer.observe(el)
    })
  }
  return observeElements
}