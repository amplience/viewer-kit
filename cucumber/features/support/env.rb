require 'httparty'
require 'rspec'
require 'watir-webdriver'

VERSION = ENV['VIEWERKIT_VERSION'] || 75
URL = ENV['VIEWERKIT_URL'] || "https://s3-eu-west-1.amazonaws.com/qa-static.adis.amplience.com/viewers/ps/viewerKit/release-1.4.0/#{VERSION}/index.html"
BROWSER = ENV['VIEWERKIT_BROWSER'] || 'phantomjs'