require 'test_helper'

class UserTest < ActiveSupport::TestCase
  def setup
    @user = User.new(
      username: "",
      email: "",
    )
  end
  
  test "username should be present" do
    @user.username = ""
    assert_not @user.valid?
  end