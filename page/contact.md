---
title: Contact
permalink: "/contact"
order: 4
---

<section class="mt-6">
	<div class="container">
		<div class="row">
			<div class="col w-full md:w-2/3 lg:w-1/2">
				<h1 class="mb-2">Contact</h1>
				<p class="mb-4">Use the form below to get in touch</p>
				<form action="https://getform.io/f/2a12516d-c9c1-45cb-9e83-76cac86e3d9d" method="POST" class="bass-cycle-form mb-6">
					<input type="hidden" name="redirect_to" value="{{ site.baseurl }}/thank_you"/>
					
					<div class="mb-3 flex flex-col">
						<label class="form-label" for="name">Your name</label>
						<input type="text" name="name" placeholder="e.g. Ronald Crosby">
					</div>

					<div class="mb-3 flex flex-col">
						<label class="form-label" for="email">Your email</label>
						<input type="email" name="email" placeholder="e.g. ronald@gmail.com">
					</div>

					<div class="mb-3 flex flex-col">
						<label class="form-label" for="message">Your message</label>
						<textarea type="text" name="message" rows="10" placeholder="Write your message here"></textarea>
					</div>

					<button type="submit" class="button">Send message</button>
				</form>
			</div>
		</div>
	</div>	
</section>

