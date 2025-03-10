class ApplicationController < ActionController::API
  before_action: is_authorized?

  def auth_headers
    request.headers["AUTHORIZATION"]
  end

  def encode_token
    JWT.encode(auth_headers)
  end

  def decode_token
   if auth_headers.present?
      # token = 
   end
  end

  def login

  end

  def is_logged_in?

  end

  def is_authorized?

  end
  
end
