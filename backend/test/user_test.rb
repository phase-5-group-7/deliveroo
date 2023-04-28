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

  test "email should be present" do
    @user.email = ""
    assert_not @user.valid?
  end

  test "username should be unique" do
    duplicate_user = @user.dup
    duplicate_user.email = "other@example.com"
    @user.save
    assert_not duplicate_user.valid?
  end
  test "email should be unique" do
    duplicate_user = @user.dup
    duplicate_user.username = "otheruser"
    @user.save
    assert_not duplicate_user.valid?
  end

end