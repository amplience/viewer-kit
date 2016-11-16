Given(/^I am using the (\w+) player$/) do |player|
  @browser = Watir::Browser.new(BROWSER)
  @browser.goto(URL)
end

When(/^I set the browser viewport to be (\d+),(\d+)$/) do |width, height|
  @browser.driver.manage.window.resize_to(width, height)
end