class ApplicationController < ActionController::API
    before_action :authorized # Calls authorized method before any other controller method is called
  
    # Encodes a token using a secret key
    def encode_token(payload)
      JWT.encode(payload, 'secret')
    end
  
    # Returns the Authorization header from the request
    def auth_header
      request.headers['Authorization']
    end
  
    # Decodes a token using a secret key and returns the decoded payload
    def decoded_token
      if auth_header
        token = auth_header.split(' ')[1]
        begin
          JWT.decode(token, 'secret', true, algorithm: 'HS256')
        rescue JWT::DecodeError
          nil
        end
      end
    end
  
    # Finds the user corresponding to the decoded token
    def current_user
      if decoded_token
        user_id = decoded_token[0]['user_id']
        @user = User.find_by(id: user_id)
      end
    end
  
    # Returns true if the user is logged in, false otherwise
    def logged_in?
      !!current_user
    end
  
    # Renders an error message if the user is not authorized
    def authorized
      render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end
  end
  