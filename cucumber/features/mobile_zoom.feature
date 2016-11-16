Feature: Mobile zoom

  Scenario: Mobile view. The image should be unzoomed when the mobile view is open
    Given I am using the Viewerkit player
    When I set the browser viewport to be 600,800 
    Then image is not zoomed

#  Scenario: Mobile view. The image should have close button when you click on the image in the main container
#    Given I am using the Viewerkit player
#    When I set the browser viewport to be 600,800
#    Then I click 1 times on the image in the main container
#    And the close button is present

#  Scenario: Mobile view. The image should be unzoomed when you click on the close button
#    Given I am using the Viewerkit player
#    When I set the browser viewport to be 600,800
#    Then I click 1 times on the image in the main container
#    Then I click on the close button
#    And image is not zoomed
#
#  Scenario: Mobile view. The image should be first level zoomed when you click 1 time
#  on the image
#    Given I am using the Viewerkit player
#    When I set the browser viewport to be 600,800
#    Then I click 1 times on the image in the main container
#    And image has first zoom level in mobile view
#
#  Scenario: Mobile view. The image should be second level zoomed when you click two times
#  on the image
#    Given I am using the Viewerkit player
#    When I set the browser viewport to be 600,800
#    Then I click 2 times on the image in the main container
#    And image has second zoom level in mobile view
#
#  Scenario: Mobile view. The image should be third level zoomed when you click three times
#  on the image
#    Given I am using the Viewerkit player
#    When I set the browser viewport to be 600,800
#    Then I click 3 times on the image in the main container
#    And image has third zoom level in mobile view

  Scenario: Mobile view. The image should be forth level zoomed when you click four times
  on the image
    Given I am using the Viewerkit player
    When I set the browser viewport to be 600,800 
    Then I click 4 times on the image in the main container
    And image has forth zoom level in mobile view

#  Scenario: Mobile view. The image is unzoomed when you zoom the image, click on the next pagination dot and
#  go to the previously zoomed image. The image is unzoomed.
#    Given I am using the Viewerkit player
#    When I set the browser viewport to be 600,800
#    And I click 1 times on the image in the main container
#    And image has first zoom level in mobile view
#    Then I click on the 2 pagination dot
#    And I click on the 1 pagination dot
#    And image is not zoomed