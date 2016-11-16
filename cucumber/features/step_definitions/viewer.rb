Then(/^the number of pagination screen selectors should be (\d+)$/) do |index|
  @amp_nav = @browser.element(:class => 'nav-container')
  @amp_pagination_total = @amp_nav.elements(:class => 'amp-slide')

  expect(@amp_pagination_total.length).to eql(index.to_i)
end

Then(/^the number of visible pagination screen selectors should be (\d+)$/) do |index|
  @amp_nav = @browser.element(:class => 'nav-container')
  @amp_pagination_visible = @amp_nav.elements(:class => 'amp-visible')
  expect(@amp_pagination_visible.length).to eql(index.to_i)
end

Then(/^the number of thumbnails should be (\d+)$/) do |index|
  @amp_nav = @browser.element(:class => 'nav-container')
  @amp_pagination_visible = @amp_nav.elements(:class => 'amp-selected')

  expect(@amp_pagination_visible.length).to eql(index.to_i)
end

Then(/^the highlighted screen selector should be in position (\d+)$/) do |index|
  @amp_nav = @browser.element(:class => 'nav-container')
  @amp_pagination_total = @amp_nav.elements(:class => 'amp-slide')

  expect(@amp_pagination_total[index.to_i].class_name).to include('amp-selected')
end

Then(/^the (\w+) navigation button should be (\w+) in (carousel|main container)$/) do |direction, state, area|

  if area == 'carousel'
    @amp_nav = @browser.element(:class => 'nav-container')
    if direction == 'previous'
      button = @amp_nav.element(:class => 'nav-prev-test')
      if state == 'disabled'
        expect(button.class_name).to include('disabled')
      elsif state == 'enabled'
        expect(button.class_name).to_not include('disabled')
      end
    elsif direction == 'next'
      button = @amp_nav.element(:class => 'nav-next-test')
      if state == 'disabled'
        expect(button.class_name).to include('disabled')
      elsif state == 'enabled'
        expect(button.class_name).to_not include('disabled')
      end
    end
  elsif area == 'main container'
    @amp_nav = @browser.element(:class => 'main-container')
    if direction == 'previous'
      button = @amp_nav.element(:class => 'main-container-prev')
      if state == 'disabled'
        expect(button.class_name).to include('disabled')
      elsif state == 'enabled'
        expect(button.class_name).to_not include('disabled')
      end
    elsif direction == 'next'
      button = @amp_nav.element(:class => 'main-container-next')
      if state == 'disabled'
        expect(button.class_name).to include('disabled')
      elsif state == 'enabled'
        expect(button.class_name).to_not include('disabled')
      end
    end
  end
end

When(/^I click on the (previous|next) navigation button in (carousel|main container) (\d+) times$/) do |direction, area, times|

  @times = times.to_i

  if area == 'carousel'
    @amp_nav = @browser.element(:class => 'nav-container')
    if direction == 'previous'
      button = @amp_nav.element(:class => 'nav-prev-test')
    elsif direction == 'next'
      button = @amp_nav.element(:class => 'nav-next-test')
    end
  elsif area == 'main container'
    @amp_main = @browser.element(:class => 'main-container')
    if direction == 'previous'
      button = @amp_main.element(:class => 'main-container-prev')
    elsif direction == 'next'
      button = @amp_main.element(:class => 'main-container-next')
    end
  end
  @times.times do
    button.click
    sleep(1)
  end

end


Then(/^the number of pagination dots should be (\d+)$/) do |index|
  @amp_nav = @browser.element(:class => 'nav-container')
  @amp_pagination_total = @amp_nav.elements(:class => 'amp-slide')

  expect(@amp_pagination_total.length).to eql(index.to_i)
end

Then(/^the number of visible pagination dots should be (\d+)$/) do |index|
  @amp_nav = @browser.element(:class => 'nav-container')
  @amp_pagination_visible = @amp_nav.elements(:class => 'amp-visible')

  expect(@amp_pagination_visible.length).to eql(index.to_i)
end

Then(/^the number of highlighted pagination dots should be (\d+)$/) do |index|
  @amp_nav = @browser.element(:class => 'nav-container')
  @amp_pagination_visible = @amp_nav.elements(:class => 'amp-selected')

  expect(@amp_pagination_visible.length).to eql(index.to_i)
end

Then(/^the highlighted pagination dot should be in position (\d+)$/) do |index|
  @amp_nav = @browser.element(:class => 'nav-container')
  @amp_pagination_total = @amp_nav.elements(:class => 'amp-slide')
  expect(@amp_pagination_total[index.to_i-1].class_name).to include('amp-selected')
end

When(/^I click on the (\w+) pagination dot$/) do |index|

  @amp_nav = @browser.element(:class => 'nav-container')
  @amp_pagination_total = @amp_nav.elements(:class => 'amp-slide')
  @amp_pagination_total[index.to_i - 1].click
end

And(/^the (\d+) thumbnail (should|should not) be highlighted$/) do |index, state|

  amp_nav = @browser.element(:class => 'nav-container')
  visible_thumbnails = amp_nav.elements(:class => 'amp-visible')


  if state == 'should not'
    expect(visible_thumbnails[index.to_i - 1].class_name).to_not include('amp-selected')
  elsif state == 'should'
    expect(visible_thumbnails[index.to_i - 1].class_name).to include('amp-selected')
  end
end

Then(/^the (\w+) image at (\d+) position is displayed in carousel$/) do |asset_name, index|

  thumbnails = Array.new

  amp_nav = @browser.element(:class => 'nav-container')
  visible_thumbnails = amp_nav.elements(:class => 'amp-visible')

  visible_thumbnails.each do |visible_thumbnail|
    thumbnails << visible_thumbnail.image(:class => 'amp-image')
  end

  expect(thumbnails[index.to_i - 1].src).to include(asset_name)
end

Then(/^the (\w+) image is displayed in main container$/) do |asset_name|
  main_nav = @browser.element(:class => 'amp-anim-container')
  visible_main_asset = main_nav.element(:class => 'amp-visible')
  @image = visible_main_asset.image(:src => /#{asset_name}/)
  expect(@image.src).to include(asset_name)
end

And(/^(\d+) image is displayed in the main container$/) do |index|
  @amp_main = @browser.element(:class => 'main-container')
  @amp_main_image = @amp_main.elements(:class => 'amp-slide')

  expect(@amp_main_image[index.to_i - 1].class_name).to include("amp-selected")
end

Then(/^the (\w+) navigation button should be (\w+)$/) do |direction, state|
  @amp_nav = @browser.element(:class => 'nav-container')
  @amp_nav_previous = @amp_nav.element(:class => 'icon-left')
  @amp_nav_next = @amp_nav.element(:class => 'icon-right')

  if direction == 'previous'
    if state == 'disabled'
      expect(@amp_nav_previous.class_name).to include('disabled')
    elsif state == 'enabled'
      expect(@amp_nav_previous.class_name).to include('disabled')
    end
  elsif direction == 'next'
    if state == 'disabled'
      expect(@amp_nav_next.class_name).to include('disabled')
    elsif state == 'enabled'
      expect(@amp_nav_next.class_name).to_not include('disabled')
    end
  end
end

And(/^close is present in the image$/) do
  @close = @amp_main.div(:class => 'close')
  expect(@close.class_name).to include("icon close")
end

Then(/^I click on the close button$/) do
  @amp_main = @browser.element(:class => 'main-container')
  @close = @amp_main.div(:class => 'close')
  @close.click
end

Then(/^image is not zoomed$/) do
  @main_container = @browser.element(:class => 'main-container')
  @zoom_trap = @main_container.element(:class => 'zoom-trap')
  @amp_zoomed_container = @zoom_trap.div(:class => 'amp-zoomed-container')
  @amp_zoomed_container.wait_while_present
  expect(@amp_zoomed_container.present?).to eql (false)
end

And(/^image has (\w+) zoom level in (full|mobile) view$/) do |level, state|
  @zoomed_container = @browser.div(:class => 'amp-zoomed-container')
  @zoomed_image = @zoomed_container.image(:class => 'amp-zoomed-clone')

  if state == 'mobile'
    if level == 'first'
      sleep(5)
      expect(@zoomed_image.src).to include('w=750&h=750')
    elsif level == 'second'
      sleep(5)
      expect(@zoomed_image.src).to include('w=1000&h=1000')
    elsif level == 'third'
      sleep(5)
      expect(@zoomed_image.src).to include('w=1250&h=1250')
    elsif level == 'fourth'
      sleep(5)
      expect(@zoomed_image.src).to include('w=1500&h=1500')
    end

  elsif state == 'full'
    if level == 'first'
      sleep(5)
      expect(@zoomed_image.src).to include('w=1500&h=1500')
    elsif level == 'second'
      sleep(5)
      expect(@zoomed_image.src).to include('w=2000&h=2000')
    elsif level == 'third'
      sleep(5)
      expect(@zoomed_image.src).to include('w=2500&h=2500')
    elsif level == 'fourth'
      sleep(5)
      expect(@zoomed_image.src).to include('w=3000&h=3000')
    end
  end
end

Then(/^I go to the full view$/) do
  @browser.element(:class => 'main-container').click
end

Then(/^I click (\d+) times on the (image|zoom in|zoom out) in the main container$/) do |time, object|
  @times = time.to_i

  if object == 'image'
    @times.times { @browser.element(:class => 'main-container').click }
  elsif object == 'zoom in'
    @times.times { @browser.element(:class => 'plus').click }
  elsif object == 'zoom out'
    @times.times { @browser.element(:class => 'minus').click }
  end
end

Then(/^the number of highlighted pagination screen selectors should be (\d+)$/) do |index|
  @amp_nav = @browser.element(:class => 'nav-container')
  @amp_pagination_visible = @amp_nav.elements(:class => 'amp-selected')

  expect(@amp_pagination_visible.length).to eql(index.to_i)
end

And(/^I click on the (\d+) thumbnail$/) do |index|
  index = index.to_i-1

  @amp_nav = @browser.element(:class => 'nav-container')
  @thumbnails = @amp_nav.elements(:class => 'amp-visible')

  case index
    when 1..5
      @thumbnails[index.to_i].click
  end

end

Then(/^the overlay is present over the (\d+) image$/) do |arg|
  @main_container = @browser.element(:class => 'main-container')
  @tooltip = @main_container.element(:class => 'tooltip')
  expect(@tooltip.visible?).to eql (true)
end

Then(/^the overlay is disappeared in (\d+) ms$/) do |index|
  @main_container = @browser.element(:class => 'main-container')
  @tooltip = @main_container.element(:class => 'tooltip')
  sleep(3)
  expect(@tooltip.visible?).to eql (false)
end

Then(/^the close button (is|is not) present$/) do |state|
  @main_container = @browser.element(:class => 'main-container')
  @close = @main_container.element(:class => 'close')

  case state
    when 'is'
      expect(@close.visible?).to eql(true)
    when 'is not'
      expect(@close.exist?).to eql(false)
  end

end

Then(/^zoom (\w+) button is present$/) do |type|
  @panel = @browser.element(:class => 'panel')

  if type == 'in'
    @plus = @panel.element(:class => 'plus')
    expect(@plus.visible?).to eql(true)
  elsif type == 'out'
    @minus = @panel.element(:class => 'minus')
    expect(@minus.visible?).to eql(true)
  end
end

And(/^zoom (in|out) is (disabled|enabled|present|not present)$/) do |type, state|
  @panel = @browser.element(:class => 'panel')

  if type == 'in'
    @plus = @panel.element(:class => 'plus')
    if state == 'enabled'
      expect(@plus.class_name).to_not include('disabled')
    elsif state == 'disabled'
      expect(@plus.class_name).to include('disabled')
    elsif state == 'present'
      expect(@plus.visible?).to eql(true)
    elsif state == 'not present'
      expect(@plus.exist?).to eql(false)
    end
  elsif type == 'out'
    @minus = @panel.element(:class => 'minus')
    if state == 'enabled'
      expect(@minus.class_name).to_not include('disabled')
    elsif state == 'disabled'
      expect(@minus.class_name).to include('disabled')
    elsif state == 'present'
      expect(@minus.visible?).to eql(true)
    elsif state == 'not present'
      expect(@minus.exist?).to eql(false)
    end
  end
end
