class ApplicationController < ActionController::Base
  inertia_share notice: -> { flash.notice }

  private

  def serialize(resource)
    ActiveModelSerializers::SerializableResource.new(resource)
  end

  def serialize_errors(resource)
    resource.errors.as_json(full_messages: true)
  end
end
