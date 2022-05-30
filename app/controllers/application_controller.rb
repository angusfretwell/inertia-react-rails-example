class ApplicationController < ActionController::Base
  inertia_share notice: -> { flash.notice }
end
