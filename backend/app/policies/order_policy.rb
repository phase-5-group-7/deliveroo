class OrderPolicy < ApplicationPolicy
    attr_reader :user, :order

    def initialize(user,order)
        @user = user
        @order = order
    end

    def update? 
        user.admin?
    end

    def show
        user.admin?
    end

end