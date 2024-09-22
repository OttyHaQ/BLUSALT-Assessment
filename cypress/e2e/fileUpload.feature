Feature: Test Automation Assessment

    Scenario: File upload via drag&drop
        Given I want to attach a file via drag&drop
        When I click on File upload
        And I drag&drop a File
        Then The file should be selected


    Scenario: I want to attach a file using `Browse files` button
        Given I want to attach a file via drag&drop
        When I click on File upload
        And I browse and select a File
        Then The file should be selected