Feature: Desktop view.
  Desktop view is >= 769 wide

  Scenario: Carousel. Checking the total number of thumbnails that corresponding to the number of assets in the set
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    Then the number of pagination screen selectors should be 7

  Scenario: Carousel. Checking the correct number of visible thumbnails
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    Then the number of visible pagination screen selectors should be 5

  Scenario: Carousel. Before navigation. Checking navigation buttons state
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    Then the previous navigation button should be disabled in carousel
    And the next navigation button should be enabled in carousel

  Scenario: Main container. Before navigation. Checking navigation buttons state
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    Then the previous navigation button should be disabled in main container
    And the next navigation button should be enabled in main container

  Scenario: Carousel. First thumbnail is selected
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    Then the number of thumbnails should be 1
    And the 1 thumbnail should be highlighted

  Scenario: Carousel. Click on the previous inactive navigation button. Correct buttons state
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the previous navigation button in carousel 1 times
    Then the previous navigation button should be disabled in carousel
    And the next navigation button should be enabled in carousel

  Scenario: Main container. Click on the previous inactive navigation button. Correct buttons state
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the previous navigation button in main container 1 times
    Then the previous navigation button should be disabled in main container
    And the next navigation button should be enabled in main container

  Scenario: Carousel. Navigation start. The next thumbnail is not highlighted and the main image not changed
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the next navigation button in carousel 1 times
    Then the 1 thumbnail should not be highlighted
    And the square_1 image is displayed in main container

#  Scenario: Carousel. Navigation via thumbnail. The selected thumbnail is highlighted and corresponding main image displayed
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 798,769
#    And I click on the 2 thumbnail
#    Then the 2 thumbnail should be highlighted
#    And the square_2 image is displayed in main container
#
#  Scenario: Carousel. Navigation via thumbnail. The selected thumbnail is highlighted and corresponding main image displayed
#    Given I am using the ViewerKit player
#    When I set the browser viewport to be 798,769
#    And I click on the 3 thumbnail
#    Then the 3 thumbnail should be highlighted
#    And the square_3 image is displayed in main container

  Scenario: Carousel. Navigation via thumbnail back. The selected thumbnail is highlighted and corresponding main image displayed
    Given I am using the ViewerKit player
    When I set the browser viewport to be 798,769
    And I click on the 2 thumbnail
    And I click on the 1 thumbnail
    Then the 1 thumbnail should be highlighted
    And the square_1 image is displayed in main container

  Scenario: Carousel. Navigation forward. Correct state navigation buttons
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the next navigation button in carousel 1 times
    Then the previous navigation button should be enabled in carousel
    And the next navigation button should be enabled in carousel

  Scenario: Carousel. Navigation to the end. Correct state navigation buttons
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the next navigation button in carousel 2 times
    Then the previous navigation button should be enabled in carousel
    And the next navigation button should be disabled in carousel

  Scenario: Carousel. Navigation to the end. Click on the next inactive navigation button. Correct buttons state
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the next navigation button in carousel 3 times
    Then the previous navigation button should be enabled in carousel
    And the next navigation button should be disabled in carousel

  Scenario: Main container. Navigation to the end. Click on the next inactive navigation button. Correct buttons state
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the next navigation button in main container 6 times
    Then the previous navigation button should be enabled in main container
    And the next navigation button should be disabled in main container

  Scenario: Carousel. The correct thumbnail displayed in the carousel after reaching end
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the next navigation button in carousel 2 times
    Then the spin12 image at 5 position is displayed in carousel

  Scenario: Carousel. The last thumbnail still presents in the end after clicking on the inactive next navigation button.
  No loop.
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the next navigation button in carousel 3 times
    Then the spin12 image at 5 position is displayed in carousel

  Scenario: Main container. The correct image presents after reaching to the end.
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the next navigation button in main container 6 times
    Then the spin12 image is displayed in main container

  Scenario: Main container. The main image not changed after clicking on the inactive next navigation button.
  No loop.
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the next navigation button in main container 7 times
    Then the spin12 image is displayed in main container

  Scenario: Carousel. Navigation back. Correct state navigation buttons
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the next navigation button in carousel 2 times
    And I click on the previous navigation button in carousel 1 times
    Then the previous navigation button should be enabled in carousel
    And the next navigation button should be enabled in carousel

  Scenario: Main container. Navigation forward. The next image appears in main container
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the next navigation button in main container 1 times
    Then the square_2 image is displayed in main container
    And the 2 thumbnail should be highlighted

  Scenario: Main container. Navigation forward. Correct state of navigation buttons.
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the next navigation button in main container 1 times
    Then the previous navigation button should be enabled in main container
    And the next navigation button should be enabled in main container

  Scenario: Main container. Navigation forward. Correct state of navigation buttons. Appearing next visible thumbnails in the carousel
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the next navigation button in main container 5 times
    Then the previous navigation button should be enabled in main container
    And the next navigation button should be enabled in main container

  Scenario: Carousel. Navigation forward. Correct state of navigation buttons. Appearing next visible thumbnails in the carousel
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the next navigation button in main container 5 times
    Then the previous navigation button should be enabled in carousel
    And the next navigation button should be disabled in carousel

  Scenario: Main container. When navigated to the end. Correct state navigation buttons
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the next navigation button in main container 6 times
    Then the previous navigation button should be enabled in main container
    And the next navigation button should be disabled in main container

  Scenario: Carousel. When navigated to the end. Correct state navigation buttons
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the next navigation button in main container 6 times
    Then the previous navigation button should be enabled in carousel
    And the next navigation button should be disabled in carousel

  Scenario: Main container. Navigation back. Checking correct state navigation buttons.
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the next navigation button in main container 6 times
    And I click on the previous navigation button in main container 1 times
    Then the previous navigation button should be enabled in main container
    And the next navigation button should be enabled in main container

  Scenario: Carousel. Navigation back. Checking correct state navigation buttons.
    Given I am using the ViewerKit player
    When I set the browser viewport to be 790,790
    And I click on the next navigation button in main container 6 times
    And I click on the previous navigation button in main container 1 times
    Then the previous navigation button should be enabled in carousel
    And the next navigation button should be disabled in carousel
