const features = () => {
    return(
        <section class="bg-gray-200 py-16">
  <div class="wrapper mx-auto px-4">
    <h2 class="text-3xl font-semibold mb-8 text-center">Contact Us</h2>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
        <form action="#" method="post" class="bg-white p-8 rounded-lg shadow-lg">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium mb-2">Name</label>
            <input type="text" id="name" name="name" class="w-full border border-gray-300 p-3 rounded-lg" required />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" class="w-full border border-gray-300 p-3 rounded-lg" required />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-sm font-medium mb-2">Message</label>
            <textarea id="message" name="message" rows="4" class="w-full border border-gray-300 p-3 rounded-lg" required></textarea>
          </div>
          <button type="submit" class="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Send Message</button>
        </form>
      </div>
      <div class="w-full lg:w-1/2 lg:pl-8">
        <div class="bg-white p-8 rounded-lg shadow-lg">
          <h3 class="text-xl font-semibold mb-4">Contact Information</h3>
          <p class="mb-2">Address: 1234 Main St, Anytown, USA</p>
          <p class="mb-2">Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>
      </div>
    </div>
  </div>
</section>
    )
};
export default features;