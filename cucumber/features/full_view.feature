Feature: Full view

#  Scenario: Full view. Checking close button is present
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    Then the close button is present

  Scenario: Full view. Image in main assets is not zoomed
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I go to the full view
    Then image is not zoomed

#  Scenario: Full view. Checking zoom in button is present and enabled
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    Then zoom in button is present
#    And zoom in is enabled
#
#  Scenario: Full view. Checking zoom out button is present and disabled
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    Then zoom out button is present
#    And zoom out is disabled
#
#  Scenario: Full view. 4 thumbnails are present in carousel
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    Then the number of visible pagination screen selectors should be 4
#
#  Scenario: Full view. Zoom buttons are disabled for 360 asset
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click on the next navigation button in main container 4 times
#    Then zoom in is disabled
#    And zoom out is disabled
#
#  Scenario: Full view. Zoom buttons are disabled for video asset
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click on the next navigation button in main container 5 times
#    Then zoom in is disabled
#    And zoom out is disabled
#
#  Scenario: Full view. Zoom buttons still disabled after clicking on 360 asset
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click on the next navigation button in main container 4 times
#    And I click 1 times on the image in the main container
#    Then zoom in is disabled
#    And zoom out is disabled
#
#  Scenario: Full view. Zoom out button is enabled after clicking on image in main container
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 1 times on the image in the main container
#    Then zoom out is enabled
#
#  Scenario: Full view. First zoom level for image in main container by clicking on image in main container
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 1 times on the image in the main container
#    Then image has first zoom level in full view
#
#  Scenario: Full view. Second zoom level for image in main container by clicking on image in main container
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 2 times on the image in the main container
#    Then image has second zoom level in full view
#
#  Scenario: Full view. Third zoom level for image in main container by clicking on image in main container
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 3 times on the image in the main container
#    Then image has third zoom level in full view
#
#  Scenario: Full view. Fourth zoom level for image in main container by clicking on image in main container
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 4 times on the image in the main container
#    Then image has fourth zoom level in full view
#
#  Scenario: Full view. Fourth zoom level for image in main container by clicking on image in main container.
#  Zoom in button is disabled
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 4 times on the image in the main container
#    Then zoom in is disabled
#
#  Scenario: Full view. Third zoom level. Zoom back by clicking on image in main container
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 5 times on the image in the main container
#    Then image has third zoom level in full view
#
#  Scenario: Full view. Second zoom level. Zoom back by clicking on image in main container
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 6 times on the image in the main container
#    Then image has second zoom level in full view
#
#  Scenario: Full view. First zoom level. Zoom back by clicking on image in main container
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 7 times on the image in the main container
#    Then image has first zoom level in full view

  Scenario: Full view. Image is not zoomed. Zoom back by clicking on image in main container
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I go to the full view
    And I click 8 times on the image in the main container
    Then image is not zoomed

#  Scenario: Full view. Image is not zoomed. Zoom out button is disabled after clicking on image in main container
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 8 times on the image in the main container
#    Then zoom out is disabled
#
#  Scenario: Full view. Zoom out button is enabled after clicking on zoom in button
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 1 times on the zoom in in the main container
#    Then zoom out is enabled
#
#  Scenario: Full view. First zoom level for image in main container by clicking on zoom in button
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 1 times on the zoom in in the main container
#    Then image has first zoom level in full view
#
#  Scenario: Full view. Second zoom level for image in main container by clicking on zoom in button
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 2 times on the zoom in in the main container
#    Then image has second zoom level in full view
#
#  Scenario: Full view. Third zoom level for image in main container by clicking on zoom in button
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 3 times on the zoom in in the main container
#    Then image has third zoom level in full view
#
#  Scenario: Full view. Fourth zoom level for image in main container by clicking on zoom in button
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 4 times on the zoom in in the main container
#    Then image has fourth zoom level in full view
#
#  Scenario: Full view. Fourth zoom level for image in main container by clicking on zoom in button.
#  Zoom in button is disabled
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 4 times on the zoom in in the main container
#    Then zoom in is disabled
#
#  Scenario: Full view. Third zoom level for image in main container by clicking on zoom out button
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 4 times on the zoom in in the main container
#    And I click 1 times on the zoom out in the main container
#    Then image has third zoom level in full view
#
#  Scenario: Full view. Second zoom level for image in main container by clicking on zoom out button
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 4 times on the zoom in in the main container
#    And I click 2 times on the zoom out in the main container
#    Then image has second zoom level in full view
#
#  Scenario: Full view. First zoom level for image in main container by clicking on zoom out button
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 4 times on the zoom in in the main container
#    And I click 3 times on the zoom out in the main container
#    Then image has first zoom level in full view
#
#  Scenario: Full view. Image is not zoomed. Zoom back by clicking on zoom out button
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click 4 times on the zoom in in the main container
#    And I click 4 times on the zoom out in the main container
#    Then image is not zoomed
#
#  Scenario: Back to Desktop view. 5 visible thumbnails present
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click on the close button
#    Then the number of visible pagination screen selectors should be 5
#
#  Scenario: Back to Desktop view. Close button not present
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click on the close button
#    Then the close button is not present
#
#  Scenario: Back to Desktop view. Zoom buttons not present after closing full view
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 790,790
#    And I go to the full view
#    And I click on the close button
#    Then zoom in is not present
#    And zoom out is not present