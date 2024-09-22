Feature: Test Automation Assessment

     Scenario: Shadow Dom
        Given I want to copy to a clipboard
        When I click on Shadow Dom
        And I click the settings button
        And I click the copy button
        Then A new guid should be generated and copied to the clipboard
        