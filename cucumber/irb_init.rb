require "watir-webdriver"

b = Watir::Browser.new(:phantomjs)
b.goto("http://s3-eu-west-1.amazonaws.com/qa-static.adis.amplience.com/viewers/ps/viewerKit/develop/3/index.html")
b.driver.manage.window.resize_to(769,769)
amp_nav = b.element(:class => 'nav-container')
amp_pagination_total = amp_nav.elements(:class => 'amp-slide')
amp_pagination_visible = amp_nav.elements(:class => 'amp-visible')
amp_pagination_seen = amp_nav.elements(:class => 'amp-seen')

c = "hello"
