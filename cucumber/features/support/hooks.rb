After do |scenario|
  if scenario.failed?
    @browser.screenshot.save('failed.png')
  end

  @browser.close
end
