class User < ApplicationRecord
    has_many :orders
    validates :username, presence: true, uniqueness: true
    validate :email, presence: true, uniqueness: true
end
