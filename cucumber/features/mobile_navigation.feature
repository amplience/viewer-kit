Feature: Mobile navigation
  Desktop view is <= 768 wide

  Scenario: Mobile view should have correct number of pagination dots
  This is the total number of dots representing the number of items in
  the selected media set
    Given I am using the Renderkit player
    When I set the browser viewport to be 768,768
    Then the number of pagination dots should be 7

  Scenario: Mobile view should have correct number of pagination dots
  set to visible.  This is a css class added to pagination dots current
  viewable.
    Given I am using the Renderkit player
    When I set the browser viewport to be 768,768
    Then the number of visible pagination dots should be 7

#  Scenario: Mobile view should have the first pagination dot highlighted
#    Given I am using the Renderkit player
#    When I set the browser viewport to be 768,768
#    Then the number of highlighted pagination dots should be 1
#    And the highlighted pagination dot should be in position 0

  Scenario: Mobile view should have the second pagination dot highlighted
  when you click on the second pagination dot
    Given I am using the Renderkit player
    When I set the browser viewport to be 768,768
    Then I click on the 1 pagination dot
    And the number of highlighted pagination dots should be 1
    And the highlighted pagination dot should be in position 1

#  Scenario: Mobile view. The next image should be displayed in the main container when
#  you click on the next pagination dot
#    Given I am using the Viewerkit player
#    When I set the browser viewport to be 768,768
#    Then I click on the 1 pagination dot
#    And the highlighted pagination dot should be in position 1
#    And 1 image is displayed in the main container

#  Scenario: Mobile view. The displayed image corresponds the highlighted pagination dot
#    Given I am using the Viewerkit player
#    When I set the browser viewport to be 768,768
#    And I click on the 2 pagination dot
#    Then 2 image is displayed in the main container
#    And the highlighted pagination dot should be in position 2

  Scenario: Mobile view. The browser viewport is set to 365. Mobile view should have the correct number
  of pagination dots
    Given I am using the Viewerkit player
    And I set the browser viewport to be 365,768
    Then the number of pagination dots should be 7

  Scenario: Mobile view. The browser viewport is set to 365. Mobile view should have correct number of
  pagination dots set to visible.
    Given I am using the Viewerkit player
    And I set the browser viewport to be 365,768
    Then the number of visible pagination dots should be 4

  Scenario: Mobile view. The browser viewport is set to 365. Mobile view should have the first pagination icon
  highlighted
    Given I am using the Viewerkit player
    When I set the browser viewport to be 365,768
    Then the number of highlighted pagination screen selectors should be 1
    And the highlighted screen selector should be in position 0

  Scenario: Mobile view. The browser viewport is set to >= 320 <= 365. Mobile view should have
  enabled/disabled next/previous navigation button after player loading
    Given I am using the Viewerkit player
    When I set the browser viewport to be 365,768
    Then the previous navigation button should be disabled
    And the next navigation button should be enabled

  Scenario: Mobile view. Textual overlay is present over the image
    Given I am using the Viewerkit player
    When I set the browser viewport to be 600,900
    Then the overlay is present over the 0 image

#  Scenario: Mobile view. Textual overlay is disappeared in 3000 ms
#    Given I am using the Viewerkit player
#    When I set the browser viewport to be 600,900
#    Then the overlay is disappeared in 3000 ms
