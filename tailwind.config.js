module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: them => ({
        'header-img': "url('https://cdn.pixabay.com/photo/2017/07/06/15/23/sky-2478361_960_720.jpg')",
      })
    },
  },
  plugins: [],
}