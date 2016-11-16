needs
ruby

plus the following gems (not setup bundler yet)
cucumber
rspec
watir-webdriver
httparty

also need to set some ENV vars to overwrite defaults
RENDERKIT_VERSION=<int>
RENDERKIT_BROWSER=firefox/phantomjs


Once you have everything setup, just run
cucumber

as your test runner.
